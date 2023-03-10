const newPool = require("../../../database/database");
const sqlText = require("./deletePublisher.sql");

async function deletePublisher(publisher) {
  try {
    const result = await newPool.query(sqlText[0], [publisher]);
    if (result.rowCount > 0) return 200;
    else return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = deletePublisher;
