const newPool = require("../../../database/database");
const sqlText = require("./addProduct.sql");
const getProductController = require("../getProduct/getProduct.controller");

async function addProductController(
  producttype,
  isbn,
  price,
  authorid,
  publisherid,
  name,
  quantity
) {
  try {
    let result = await getProductController(0, isbn);
    if (result.length > 0) return 400;

    let result2 = await getProductController(0, "");
    let lastIndex = 0;
    if (result2.length > 0) {
      for (let n = 0; n < result2.length; n++) {
        if (result2[n].productid > lastIndex) lastIndex = result2[n].productid;
      }
    }
    let result3 = await newPool.query(sqlText[0], [
      lastIndex + 1,
      producttype,
      isbn,
      price,
      authorid,
      publisherid,
      name,
      quantity,
    ]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addProductController;
