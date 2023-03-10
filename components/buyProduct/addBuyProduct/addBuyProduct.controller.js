const newPool = require("../../../database/database");
const sqlText = require("./addBuyProduct.sql");
const getProduct = require("../../product/getProduct/getProduct.controller");
const getBuyProduct = require("../getBuyProduct/getBuyProduct.controller");

async function addBuyProductController(
  product,
  distributor,
  quantityValue,
  isbn
) {
  try {
    let result = await getProduct(0, "", product);
    if (result.length < 1) return 400;
    let result2 = await getBuyProduct(0, 0, "");
    let lastIndex = 0;
    if (result2.length > 0) {
      for (let n = 0; n < result2.length; n++) {
        if (result2[n].buyid > lastIndex) lastIndex = result2[n].buyid;
      }
    }
    let today = new Date();
    let result3 = await newPool.query(sqlText[0], [
      lastIndex + 1,
      today,
      isbn,
      product,
      distributor,
      quantityValue
    ]);

    if (result3.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addBuyProductController;
