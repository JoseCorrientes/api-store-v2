const newPool = require("../../../database/database");
const sqlText = require("./modifyQuantityProduct.sql");
const getProduct = require("../getProduct/getProduct.controller");

async function modifyQuantityProduct(productid, quantityValue) {
  try {
    let result = await getProduct(0, "", productid);
    if (result.length < 1) return 400;
    let existNow = result[0].quantity;

    if (existNow + quantityValue < 0) return 400;
    let finalQuantity = existNow + quantityValue;
    let result2 = await newPool.query(sqlText[0], [productid, finalQuantity]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = modifyQuantityProduct;
