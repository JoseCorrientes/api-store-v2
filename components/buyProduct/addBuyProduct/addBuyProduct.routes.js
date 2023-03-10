const { Router } = require("express");
const router = Router();
const addBuyProductController = require("./addBuyProduct.controller");

router.post("/", async (req, res) => {
  try {
    const { productid, distributorid, quantity, isbn } = req.body;
    const product = parseInt(productid);
    const distributor = parseInt(distributorid);
    const quantityValue = parseInt(quantity);
    const result = await addBuyProductController(product, distributor, quantityValue, isbn);
    if (result === 200) return res.status(200).send("Buy Appended");
    else return res.status(404).send("Buy didn't append");
  } catch (e) {
    return res.send("Error /addBuyProduct");
  }
});

module.exports = router;