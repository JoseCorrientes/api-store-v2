const { Router } = require("express");
const router = Router();
const finalSellController = require("./finalSell.controller");

router.put("/", async (req, res) => {
  try {
    const { clientid, cartid, individualproducts, total } = req.body;
    const client = parseInt(clientid);
    const cart = parseInt(cartid);
    const totalValue = parseFloat(total);

    const result = await finalSellController(
      client,
      cart,
      individualproducts,
      totalValue
    );

    if (result === 200) return res.status(200).send("Invoice was created");
    else return res.status(404).send("Invoice wasn't created");
  } catch (e) {
    return res.send("Error /finalSell");
  }
});

module.exports = router;
