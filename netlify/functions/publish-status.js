const { decrypt } = require("./utils/crypto");
const { getSessionFromEvent } = require("./utils/cookies");

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

  if (!payload.publish_id) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing publish_id" })
    };
  }

  let res;
  try {
    res = await fetch("https://open.tiktokapis.com/v2/post/publish/status/fetch/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session.access_token,
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ publish_id: payload.publish_id })
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
      body: JSON.stringify({ error: "Could not fetch post status", detail: data.error || null })
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: data.data.status,
      fail_reason: data.data.fail_reason || null,
      publicaly_available_post_id: data.data.publicaly_available_post_id || null
    })
  };
};
