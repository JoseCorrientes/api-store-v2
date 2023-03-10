require("dotenv").config();
const { CRYPTO_KEY } = process.env;
const CryptoJs = require("crypto-js");

function encryptController(msg) {
  try {
    let cipherText = CryptoJs.AES.encrypt(msg, CRYPTO_KEY).toString();
    return cipherText;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = encryptController;
