const newPool = require("../../../database/database");
const sqlText = require("./getProductType.sql");

async function getProductTypeController() {
  try {
    const result = await newPool.query(sqlText[0], []);

    return result.rows;
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getProductTypeController;
