const crypto = require("crypto");

function getRedirectUri(event) {
  const host = (event.headers && (event.headers["x-forwarded-host"] || event.headers.host)) || "";
  return "https://" + host + "/api/callback";
}

exports.handler = async function (event) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;

  if (!clientKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body:
        "TikTok login is not configured yet. TIKTOK_CLIENT_KEY is missing from the site's environment variables. " +
        "Set TIKTOK_CLIENT_KEY and TIKTOK_CLIENT_SECRET in Netlify, then redeploy."
    };
  }

  const redirectUri = getRedirectUri(event);
  const state = crypto.randomBytes(16).toString("hex");

  const params = new URLSearchParams({
    client_key: clientKey,
    scope: "user.info.basic,video.publish,video.upload",
    response_type: "code",
    redirect_uri: redirectUri,
    state: state
  });

  const authorizeUrl = "https://www.tiktok.com/v2/auth/authorize/?" + params.toString();

  return {
    statusCode: 302,
    headers: {
      Location: authorizeUrl,
      "Set-Cookie": "tt_state=" + state + "; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600"
    },
    body: ""
  };
};
