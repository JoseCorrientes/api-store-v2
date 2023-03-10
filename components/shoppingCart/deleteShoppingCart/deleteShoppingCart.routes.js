const { Router } = require("express");
const router = Router();
const deleteShoppingCartController = require("./deleteShoppingCart.controller");

router.delete("/", async (req, res) => {
  try {
    const { cartid } = req.body;
    let car = parseInt(cartid);

    const result = await deleteShoppingCartController(car);

    if (result === 200) return res.status(200).send("Shopping Cart Erased");
    else return res.status(404).send("Shopping Cart didn'n exist");
  } catch (e) {
    return res.send("Error /deleteShoppingCart");
  }
});

module.exports = router;
