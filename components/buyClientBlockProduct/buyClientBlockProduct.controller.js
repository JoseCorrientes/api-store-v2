const newPool = require("../../database/database");
const getProductController = require("../product/getProduct/getProduct.controller");

async function buyClientBlockProductController(
  cart,
  individualproducts,
  totalValue
) {
  try {
    let okToBuy = [];
    let totalCalculated = 0;

    for (let n = 0; n < individualproducts.length; n++) {
      let productid = individualproducts[n].productid;
      let quantityValue = individualproducts[n].quantity;
      const result = await getProductController(0, "", productid);
      if (result.length > 0) {
        if (result[0].quantity >= quantityValue) {
          okToBuy[n] = {
            productid: productid,
            quantity: quantityValue,
            price: parseFloat(result[0].price),
          };
          totalCalculated += quantityValue * parseFloat(result[0].price);
        } else {
          okToBuy[n] = {
            productid: productid,
            quantity: result[0].quantity,
            price: parseFloat(result[0].price),
          };
          totalCalculated += result[0].quantity * parseFloat(result[0].price);
        }
      } else {
        okToBuy[n] = {
          productid: productid,
          quantity: 0,
          price: 0,
        };
      }
    }
    let result2 = { exist: okToBuy, totalCalculated, cartid: cart };
    return result2;
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = buyClientBlockProductController;
