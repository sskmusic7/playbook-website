const { decrypt } = require("./utils/crypto");
const { getSessionFromEvent } = require("./utils/cookies");

exports.handler = async function (event) {
  const token = getSessionFromEvent(event);
  const session = token && decrypt(token);

  if (!session || !session.access_token) {
    return {
      statusCode: 401,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Not signed in" })
    };
  }

  let res;
  try {
    res = await fetch("https://open.tiktokapis.com/v2/post/publish/creator_info/query/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session.access_token,
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: "{}"
    });
  } catch (err) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not reach TikTok" })
    };
  }

  const data = await res.json().catch(function () { return {}; });

  if (!res.ok || !data.data) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not load creator info", detail: data.error || null })
    };
  }

  const d = data.data;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      creator_username: d.creator_username,
      creator_nickname: d.creator_nickname,
      creator_avatar_url: d.creator_avatar_url,
      privacy_level_options: d.privacy_level_options || [],
      comment_disabled: !!d.comment_disabled,
      duet_disabled: !!d.duet_disabled,
      stitch_disabled: !!d.stitch_disabled,
      max_video_post_duration_sec: d.max_video_post_duration_sec || null
    })
  };
};
