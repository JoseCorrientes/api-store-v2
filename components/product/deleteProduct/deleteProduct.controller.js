const newPool = require("../../../database/database");
const sqlText = require("./deleteProduct.sql");

async function deleteProductController(product) {
  try {
    const result = await newPool.query(sqlText[0], [product]);
    if (result.rowCount > 0) return 200;
    else return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = deleteProductController;
