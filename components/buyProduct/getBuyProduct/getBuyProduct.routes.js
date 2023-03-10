const { Router } = require("express");
const router = Router();
const getBuyProductController = require("./getBuyProduct.controller");

router.get("/", async (req, res) => {
  try {
    const { productid, distributorid, isbn } = req.body;
    const product = parseInt(productid);
    const distributor = parseInt(distributorid);

    const result = await getBuyProductController(product, distributor, isbn);

    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send(`Error /getBuyProduct`);
  }
});

module.exports = router;
