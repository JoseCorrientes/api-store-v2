const newPool = require("../../../database/database");
const sqlText = require("./addEmptyShoppingCart.sql");
const getShoppingCartController = require("../getShoppingCart/getShoppingCart.controller");

async function addEmptyShoppingCartController(client) {
  try {
    let result = await getShoppingCartController(client);
    if (result.length>0) return 400;

    let result2 = await getShoppingCartController(0);

    let lastIndex = 0;

    if (result2.length > 0) {
      for (let n = 0; n < result2.length; n++) {
        if (result2[n].cartid > lastIndex)
          lastIndex = result2[n].cartid;
      }
    }
    let result3 = await newPool.query(sqlText[0], [lastIndex + 1,0,"",client]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addEmptyShoppingCartController;
