const { decrypt } = require("./utils/crypto");
const { getSessionFromEvent } = require("./utils/cookies");

const ALLOWED_PRIVACY = [
  "PUBLIC_TO_EVERYONE",
  "MUTUAL_FOLLOW_FRIENDS",
  "FOLLOWER_OF_CREATOR",
  "SELF_ONLY"
];

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const token = getSessionFromEvent(event);
  const session = token && decrypt(token);

  if (!session || !session.access_token) {
    return {
      statusCode: 401,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Not signed in" })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid request body" })
    };
  }

  const privacyLevel = payload.privacy_level;
  const videoSize = Number(payload.video_size);
  const chunkSize = Number(payload.chunk_size);
  const totalChunkCount = Number(payload.total_chunk_count);

  if (!ALLOWED_PRIVACY.includes(privacyLevel)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing or invalid privacy_level" })
    };
  }

  if (!videoSize || !chunkSize || !totalChunkCount) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing video size or chunk information" })
    };
  }

  const postInfo = {
    title: String(payload.title || ""),
    privacy_level: privacyLevel,
    disable_comment: !!payload.disable_comment,
    disable_duet: !!payload.disable_duet,
    disable_stitch: !!payload.disable_stitch,
    brand_content_toggle: !!payload.brand_content_toggle
  };

  const body = {
    post_info: postInfo,
    source_info: {
      source: "FILE_UPLOAD",
      video_size: videoSize,
      chunk_size: chunkSize,
      total_chunk_count: totalChunkCount
    }
  };

  let res;
  try {
    res = await fetch("https://open.tiktokapis.com/v2/post/publish/video/init/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session.access_token,
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(body)
    });
  } catch (err) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not reach TikTok" })
    };
  }

  const data = await res.json().catch(function () { return {}; });

  if (!res.ok || !data.data || !data.data.publish_id) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "TikTok rejected the post request", detail: data.error || null })
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      publish_id: data.data.publish_id,
      upload_url: data.data.upload_url
    })
  };
};
