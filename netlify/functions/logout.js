exports.handler = async function (event) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "tt_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
    },
    body: JSON.stringify({ ok: true })
  };
};
