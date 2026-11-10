const { encrypt } = require("./utils/crypto");
const { parseCookies, getCookieHeader } = require("./utils/cookies");

function getRedirectUri(event) {
  const host = (event.headers && (event.headers["x-forwarded-host"] || event.headers.host)) || "";
  return "https://" + host + "/api/callback";
}

exports.handler = async function (event) {
  const query = event.queryStringParameters || {};
  const code = query.code;
  const state = query.state;
  const error = query.error;

  if (error) {
    return htmlError("TikTok login was cancelled or failed: " + error);
  }

  if (!code || !state) {
    return htmlError("Missing code or state from TikTok.");
  }

  const cookies = parseCookies(getCookieHeader(event));
  if (!cookies.tt_state || cookies.tt_state !== state) {
    return htmlError("Login state did not match. Please try logging in again.");
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

  if (!clientKey || !clientSecret) {
    return htmlError("TikTok login is not fully configured yet (missing client credentials).");
  }

  const redirectUri = getRedirectUri(event);

  let tokenRes;
  try {
    tokenRes = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache"
      },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
      }).toString()
    });
  } catch (err) {
    return htmlError("Could not reach TikTok to exchange the login code.");
  }

  const tokenData = await tokenRes.json().catch(function () { return {}; });

  if (!tokenRes.ok || !tokenData.access_token) {
    return htmlError("TikTok did not return an access token: " + (tokenData.error_description || tokenRes.status));
  }

  const session = {
    access_token: tokenData.access_token,
    refresh_token: tokenData.refresh_token,
    open_id: tokenData.open_id,
    scope: tokenData.scope,
    obtained_at: Date.now()
  };

  const encrypted = encrypt(session);
  const maxAge = tokenData.expires_in ? Math.max(60, Math.floor(tokenData.expires_in)) : 86400;

  const host = (event.headers && (event.headers["x-forwarded-host"] || event.headers.host)) || "";

  return {
    statusCode: 302,
    headers: {
      Location: "https://" + host + "/tiktok-studio",
      "Set-Cookie":
        "tt_session=" + encrypted + "; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=" + maxAge
    },
    body: ""
  };
};

function htmlError(message) {
  return {
    statusCode: 400,
    headers: { "Content-Type": "text/html; charset=utf-8" },
    body:
      "<!doctype html><html><body style=\"font-family:sans-serif;background:#0a0a0a;color:#fff;padding:40px;\">" +
      "<h1>Login failed</h1><p>" +
      String(message).replace(/</g, "&lt;") +
      "</p><p><a href=\"/\" style=\"color:#fff;\">Back to Playbook MPR Studio</a></p></body></html>"
  };
}
