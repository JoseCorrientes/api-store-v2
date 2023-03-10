require("dotenv").config();
const { CRYPTO_KEY } = process.env;
const CryptoJs = require("crypto-js");

function decryptController (ciphermsg) {
    try{
        const bytes = CryptoJs.AES.decrypt(ciphermsg, CRYPTO_KEY);
        const msg = bytes.toString(CryptoJs.enc.Utf8);
        return msg
    }catch(e) {
        return eee
    }
}

module.exports= decryptController;