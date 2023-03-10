const newPool = require("../../../database/database");
const sqlText = require("./addProductType.sql");
const getProductTypeController = require("../getProductType/getProductTypes.controller");

async function addProductTypeController(name) {
  try {
    let result = await getProductTypeController();
    let lastIndex = 0;
    let encontrado = false;
    if (result.length > 0) {
      for (let n = 0; n < result.length; n++) {
        if (result[n].producttype > lastIndex)
          lastIndex = result[n].producttype;
        if (result[n].name.toLowerCase() === name.toLowerCase())
          encontrado = true;
      }
    }
    if (encontrado) return 400;
    let result3 = await newPool.query(sqlText[0], [lastIndex + 1, name]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addProductTypeController;
