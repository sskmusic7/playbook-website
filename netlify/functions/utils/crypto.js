const crypto = require("crypto");

// Derives a stable 32-byte AES-256 key from the SESSION_SECRET env var,
// whatever length/format that secret happens to be in.
function getKey() {
  const secret = process.env.SESSION_SECRET || "";
  if (!secret) {
    throw new Error("SESSION_SECRET is not configured");
  }
  return crypto.createHash("sha256").update(secret).digest();
}

// Encrypts a JS value into a single base64url string: iv (12) + authTag (16) + ciphertext.
function encrypt(value) {
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const plaintext = Buffer.from(JSON.stringify(value), "utf8");
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]).toString("base64url");
}

// Reverses encrypt(). Returns null if the token is missing, malformed, or
// fails authentication (wrong key / tampered value), rather than throwing.
function decrypt(token) {
  try {
    const key = getKey();
    const buf = Buffer.from(token, "base64url");
    const iv = buf.subarray(0, 12);
    const tag = buf.subarray(12, 28);
    const ciphertext = buf.subarray(28);
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);
    const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    return JSON.parse(plaintext.toString("utf8"));
  } catch (err) {
    return null;
  }
}

module.exports = { encrypt, decrypt };
