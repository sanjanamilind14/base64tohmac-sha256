const crypto = require("crypto");

const base64String = "Base64Here";
const binaryData = Buffer.from(base64String, "base64");

const secretKey = "YourSecretKeyHere";

const hmac = crypto.createHmac("sha256", secretKey);
hmac.update(binaryData);
const hmacHash = hmac.digest("base64"); 

console.log(`HMAC-SHA256 (Base64): ${hmacHash}`);
