const newPool = require("../../../database/database");
const sqlText = require("./getUser.sql");

async function getUserController() {
  try {
    const result = await newPool.query(sqlText[0], []);
    return result.rows;
  } catch (e) {
    return `Error - ${e}`;
  }
}
module.exports = getUserController;
