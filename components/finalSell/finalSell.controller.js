const newPool = require("../../database/database");
const sqlText = require("./finalSell.sql");
const modifyQuantityProduct = require("../product/modifyQuantityProduct/modifyQuantityProduct.controller");
const getInvoice = require("../invoice/getInvoice/getInvoice.controller");
const saveInvoice = require("../../components/invoice/saveInvoice/saveInvoice.controller");
const deleteShoppingCart = require("../../components/shoppingCart/deleteShoppingCart/deleteShoppingCart.controller");

async function finalSellController(client, cart, individualproducts, total) {
  try {
    //sustrae la cantidad a facturar del stock
    for (let n = 0; n < individualproducts.length; n++) {
      let productid = individualproducts[n].productid;
      let quantity = individualproducts[n].quantity * -1;
      const result = await modifyQuantityProduct(productid, quantity);
    }

    //graba la factura
    const result2 = await getInvoice();

    //calcular ultimo registro de result2
    let lastIndex = 0;
    if (result2.length > 0) {
      for (let n = 0; n < result2.length; n++) {
        if (result2[n].invoiceid > lastIndex) lastIndex = result2[n].invoiceid;
      }
    }
    const result3 = await saveInvoice(
      lastIndex,
      individualproducts,
      total,
      client
    );
    if (result3 == 200) {
      const result4 = await deleteShoppingCart(cart);
      return 200;
    } else return 400;
    return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = finalSellController;

