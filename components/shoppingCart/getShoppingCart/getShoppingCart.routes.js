const { Router } = require("express");
const router = Router();
const getShoppingCart = require("./getShoppingCart.controller");

router.get("/", async (req, res) => {
  try {
    const { clientid } = req.body;
    const client = parseInt(clientid);
    const result = await getShoppingCart(client);
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getProduct");
  }
});

module.exports = router;
