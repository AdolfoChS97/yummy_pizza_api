const crypto = require("crypto-js");

class Crypto {
    static encrypt(key) {
        let result = crypto.AES.encrypt(key, "my secret key").toString();
        return result;
    }

    static decrypt(key) {
        let bytes = crypto.AES.decrypt(key, "my secret key");
        let originalKey = bytes.toString(crypto.enc.Utf8);
        return originalKey;
    }
}

module.exports = Crypto;