const { Router } = require("express");
const router = Router();
const deleteProductController = require("./deleteProduct.controller");

router.delete("/", async (req, res) => {
  try {
    const { productid } = req.body;
    let product = parseInt(productid);

    const result = await deleteProductController(product);
    if (result === 200) return res.status(200).send("Product Erased");
    else return res.status(404).send("Product didn'n exist");
  } catch (e) {
    return res.send("Error /deleteProduct");
  }
});

module.exports = router;
