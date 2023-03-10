const newPool = require("../../../database/database");
const sqlText = require("./login.sql");
const decryptController = require("../../util/decrypt/decrypt.controller");

async function loginController(useremail, cipherPassword) {
  try {
    const result = await newPool.query(sqlText[0], [useremail]);
    let record = result.rows;
    if (record.length < 1) return 400;
    let userPlainPassword = await decryptController(cipherPassword);
    let dbCipherPassword = record[0].password;
    let dbPlainPassword = await decryptController(dbCipherPassword);
    if (dbPlainPassword === userPlainPassword) return 200;
    else return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = loginController;
