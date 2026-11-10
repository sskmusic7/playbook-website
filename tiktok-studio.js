(function () {
  "use strict";

  var loadingState = document.getElementById("loadingState");
  var signedOutState = document.getElementById("signedOutState");
  var appState = document.getElementById("appState");
  var userAvatar = document.getElementById("userAvatar");
  var userName = document.getElementById("userName");
  var creatorLimits = document.getElementById("creatorLimits");
  var privacySelect = document.getElementById("privacyLevel");
  var allowComments = document.getElementById("allowComments");
  var allowDuet = document.getElementById("allowDuet");
  var allowStitch = document.getElementById("allowStitch");
  var commercialToggle = document.getElementById("commercialToggle");
  var videoFile = document.getElementById("videoFile");
  var titleField = document.getElementById("titleField");
  var postButton = document.getElementById("postButton");
  var statusLine = document.getElementById("statusLine");
  var logoutLink = document.getElementById("logoutLink");

  var PRIVACY_LABELS = {
    PUBLIC_TO_EVERYONE: "Everyone",
    MUTUAL_FOLLOW_FRIENDS: "Friends",
    FOLLOWER_OF_CREATOR: "Followers",
    SELF_ONLY: "Only me"
  };

  var creatorInfo = null;

  function show(el) { el.style.display = ""; }
  function hide(el) { el.style.display = "none"; }

  function setStatus(text) {
    statusLine.textContent = text || "";
  }

  function updatePostButtonState() {
    var hasFile = videoFile.files && videoFile.files.length > 0;
    var hasPrivacy = !!privacySelect.value;
    postButton.disabled = !(hasFile && hasPrivacy);
  }

  videoFile.addEventListener("change", updatePostButtonState);
  privacySelect.addEventListener("change", updatePostButtonState);

  logoutLink.addEventListener("click", function (e) {
    e.preventDefault();
    fetch("/api/logout", { method: "POST" }).then(function () {
      window.location.href = "/";
    });
  });

  function loadMe() {
    return fetch("/api/me", { credentials: "same-origin" }).then(function (res) {
      if (res.status === 401) {
        return null;
      }
      if (!res.ok) {
        throw new Error("Could not load account (" + res.status + ")");
      }
      return res.json();
    });
  }

  function loadCreatorInfo() {
    return fetch("/api/creator-info", { credentials: "same-origin" }).then(function (res) {
      if (!res.ok) {
        throw new Error("Could not load posting limits (" + res.status + ")");
      }
      return res.json();
    });
  }

  function renderUser(me) {
    userAvatar.src = me.avatar_url || "";
    userName.textContent = me.display_name || "TikTok user";
  }

  function renderCreatorInfo(info) {
    creatorInfo = info;

    // Populate privacy options ONLY from what creator_info returned.
    // Leave the placeholder as the only initially selected option.
    var options = info.privacy_level_options || [];
    options.forEach(function (code) {
      var opt = document.createElement("option");
      opt.value = code;
      opt.textContent = PRIVACY_LABELS[code] || code;
      privacySelect.appendChild(opt);
    });

    if (info.comment_disabled) {
      allowComments.checked = false;
      allowComments.disabled = true;
    }
    if (info.duet_disabled) {
      allowDuet.checked = false;
      allowDuet.disabled = true;
    }
    if (info.stitch_disabled) {
      allowStitch.checked = false;
      allowStitch.disabled = true;
    }

    var bits = [];
    if (info.max_video_post_duration_sec) {
      bits.push("Max video length: " + info.max_video_post_duration_sec + " seconds");
    }
    if (info.comment_disabled) bits.push("Comments are disabled on this account");
    if (info.duet_disabled) bits.push("Duet is disabled on this account");
    if (info.stitch_disabled) bits.push("Stitch is disabled on this account");
    creatorLimits.textContent = bits.length ? bits.join(". ") + "." : "No posting restrictions reported for this account.";

    updatePostButtonState();
  }

  function init() {
    loadMe()
      .then(function (me) {
        if (!me) {
          hide(loadingState);
          show(signedOutState);
          return null;
        }
        renderUser(me);
        return loadCreatorInfo().then(renderCreatorInfo);
      })
      .then(function (result) {
        if (result !== null) {
          hide(loadingState);
          show(appState);
        }
      })
      .catch(function (err) {
        hide(loadingState);
        show(signedOutState);
        console.error(err);
      });
  }

  function pickChunking(size) {
    var MIN_CHUNK = 5 * 1024 * 1024;
    var MAX_CHUNK = 64 * 1024 * 1024;
    if (size <= MAX_CHUNK) {
      return { chunkSize: size, totalChunks: 1 };
    }
    var chunkSize = 10 * 1024 * 1024;
    if (chunkSize < MIN_CHUNK) chunkSize = MIN_CHUNK;
    var totalChunks = Math.ceil(size / chunkSize);
    return { chunkSize: chunkSize, totalChunks: totalChunks };
  }

  function uploadChunks(uploadUrl, file, chunkSize, totalChunks) {
    var size = file.size;
    var chunkIndex = 0;

    function uploadNext() {
      if (chunkIndex >= totalChunks) {
        return Promise.resolve();
      }
      var start = chunkIndex * chunkSize;
      var end = Math.min(start + chunkSize, size) - 1;
      var blob = file.slice(start, end + 1);
      setStatus("Uploading video: chunk " + (chunkIndex + 1) + " of " + totalChunks + "...");
      return fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type || "video/mp4",
          "Content-Range": "bytes " + start + "-" + end + "/" + size
        },
        body: blob
      }).then(function (res) {
        if (!res.ok && res.status !== 201 && res.status !== 206) {
          throw new Error("Upload failed on chunk " + (chunkIndex + 1) + " (" + res.status + ")");
        }
        chunkIndex += 1;
        return uploadNext();
      });
    }

    return uploadNext();
  }

  function pollStatus(publishId) {
    var attempts = 0;
    var maxAttempts = 30;

    function check() {
      attempts += 1;
      return fetch("/api/publish-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publish_id: publishId })
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          var status = (data && data.status) || "UNKNOWN";
          setStatus("Status: " + status);
          if (status === "PUBLISH_COMPLETE" || status === "FAILED") {
            return status;
          }
          if (attempts >= maxAttempts) {
            return status;
          }
          return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
          }).then(check);
        });
    }

    return check();
  }

  postButton.addEventListener("click", function () {
    var file = videoFile.files[0];
    if (!file) return;

    var privacyLevel = privacySelect.value;
    if (!privacyLevel) return;

    postButton.disabled = true;
    setStatus("Starting upload...");

    var chunking = pickChunking(file.size);

    fetch("/api/publish-init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleField.value || "",
        privacy_level: privacyLevel,
        disable_comment: !allowComments.checked,
        disable_duet: !allowDuet.checked,
        disable_stitch: !allowStitch.checked,
        brand_content_toggle: !!commercialToggle.checked,
        video_size: file.size,
        chunk_size: chunking.chunkSize,
        total_chunk_count: chunking.totalChunks
      })
    })
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (body) {
            throw new Error((body && body.error) || "Could not start the post (" + res.status + ")");
          });
        }
        return res.json();
      })
      .then(function (initData) {
        return uploadChunks(initData.upload_url, file, chunking.chunkSize, chunking.totalChunks).then(function () {
          return initData.publish_id;
        });
      })
      .then(function (publishId) {
        setStatus("Upload complete. Waiting for TikTok to process the post...");
        return pollStatus(publishId);
      })
      .then(function (finalStatus) {
        setStatus("Done. Final status: " + finalStatus);
        postButton.disabled = false;
      })
      .catch(function (err) {
        console.error(err);
        setStatus("Error: " + err.message);
        postButton.disabled = false;
      });
  });

  init();
})();
