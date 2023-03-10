const { Router } = require("express");
const router = Router();
const addProductShoppingCartController = require("./addProductShoppingCart.controller");


router.put("/", async (req, res) => {
  try {
    const { cartid, individualproducts, total } = req.body;

    const result = await addProductShoppingCartController(cartid, individualproducts, total);


    if (result === 200) return res.status(200).send("Products Appended to The Cart");
    else return res.status(404).send("Products didn't append to the Cart");
  } catch (e) {
    return res.send("Error /addProductShoppingCart");
  }
});

module.exports = router;
