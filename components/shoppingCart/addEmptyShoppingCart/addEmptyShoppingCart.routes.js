const { Router } = require("express");
const router = Router();
const addEmptyShoppingCartController = require("./addEmptyShoppingCart.controller");

router.post("/", async (req, res) => {
  try {
    const { clientid } = req.body;
    const client = parseInt (clientid);
    const result = await addEmptyShoppingCartController(client);
    if (result === 200) return res.status(200).send("Empty Shopping Cart Appended");
    else return res.status(404).send("Empty Shopping Cart didn't append");
  } catch (e) {
    return res.send("Error /addEmptyShoppingCart");
  }
});

module.exports = router;
