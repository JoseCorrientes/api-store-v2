const newPool = require("../../../database/database");
const sqlText = require("./deleteAuthor.sql");

async function deleteAuthorController(author) {
  try {
    const result = await newPool.query(sqlText[0], [author]);
    if (result.rowCount > 0) return 200;
    else return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = deleteAuthorController;
