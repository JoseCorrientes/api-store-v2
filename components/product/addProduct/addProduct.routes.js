const { Router } = require("express");
const router = Router();
const addProductController = require("./addProduct.controller");

router.post("/", async (req, res) => {
  try {
    const { producttype, isbn, price, authorid, publisherid, name, quantity } =
      req.body;

    const result = await addProductController(
      producttype,
      isbn,
      price,
      authorid,
      publisherid,
      name,
      quantity
    );

    if (result === 200) return res.status(200).send("ProductType Appended");
    else return res.status(404).send("Product didn't append");
  } catch (e) {
    return res.send("Error /addProductType");
  }
});

module.exports = router;
