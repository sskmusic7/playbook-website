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
    res = await fetch("https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + session.access_token
      }
    });
  } catch (err) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not reach TikTok" })
    };
  }

  const data = await res.json().catch(function () { return {}; });

  if (!res.ok || !data.data || !data.data.user) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not load TikTok profile", detail: data.error || null })
    };
  }

  const user = data.data.user;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      open_id: user.open_id,
      display_name: user.display_name,
      avatar_url: user.avatar_url
    })
  };
};
