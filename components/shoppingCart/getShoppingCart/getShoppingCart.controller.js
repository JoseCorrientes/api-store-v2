const newPool = require("../../../database/database");
const sqlText = require("./getShoppingCart.sql");

async function getShoppingCartController(client) {
  try {
    if (client !== 0) {
      const result = await newPool.query(sqlText[0], [client]);
      let productJson;
      if (result.rows.length > 0) {
        productJson = result.rows.map((item) => {
          let valorString;
          if (item.individualproducts.length > 0) {
            valorString = JSON.parse(item.individualproducts);
          } else valorString = item.individualproducts;

          return {
            cartid: item.cartid,
            total: item.total,
            individualproducts: valorString,
            clientid: item.clientid,
          };
        });
        return productJson;
      }
      return result.rows;
    } else {
      const result = await newPool.query(sqlText[1], []);
      return result.rows;
    }
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getShoppingCartController;
