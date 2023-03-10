const newPool = require("../../../database/database");
const sqlText = require("./addProductShoppingCart.sql");

async function addProductShoppingCartController(
  cartid,
  individualproducts,
  total
) {
  try {
    const cart = parseInt(cartid);
    const individualProductsFinal = JSON.stringify(individualproducts);
    const totalValue = parseInt(total);
    let result = await newPool.query(sqlText[0], [
      cart,
      totalValue,
      individualProductsFinal,
    ]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addProductShoppingCartController;
