function parseCookies(header) {
  const out = {};
  (header || "").split(";").forEach(function (part) {
    const idx = part.indexOf("=");
    if (idx > -1) {
      const key = part.slice(0, idx).trim();
      const val = part.slice(idx + 1).trim();
      if (key) {
        out[key] = decodeURIComponent(val);
      }
    }
  });
  return out;
}

function getCookieHeader(event) {
  return (event.headers && (event.headers.cookie || event.headers.Cookie)) || "";
}

function getSessionFromEvent(event) {
  const cookies = parseCookies(getCookieHeader(event));
  return cookies.tt_session || null;
}

module.exports = { parseCookies, getCookieHeader, getSessionFromEvent };
