const newPool = require("../../../database/database");
const sqlText = require("./getInvoice.sql");

async function getInvoiceController() {
  try {
    const result = await newPool.query(sqlText[0], []);
    return result.rows;
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getInvoiceController;
