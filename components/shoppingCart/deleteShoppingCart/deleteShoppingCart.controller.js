const newPool = require("../../../database/database");
const sqlText = require("./deleteShoppingCart.sql");

async function deleteShoppingCartController (car) {
  try {
    const result = await newPool.query(sqlText[0], [car]);
    if (result.rowCount > 0) return 200;
    else return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = deleteShoppingCartController;