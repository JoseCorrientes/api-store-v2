const { Router } = require("express");
const router = Router();
const modifyQuantityProductController = require("./modifyQuantityProduct.controller");

router.put("/", async (req, res) => {
  try {
    const { productid, quantity } = req.body;

    const product = parseInt(productid);
    const quantityValue = parseInt(quantity);
    const result = await modifyQuantityProductController(
      productid,
      quantityValue
    );
    if (result === 200) return res.status(200).send("Quantity was modified");
    else return res.status(404).send("Quantity wasn't modified");
  } catch (e) {
    return res.send("Error /modifyQuantityProduct");
  }
});

module.exports = router;
