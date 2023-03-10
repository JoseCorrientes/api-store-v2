const { Router } = require("express");
const router = Router();
const addProductTypeController = require("./addProductType.controller");

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const result = await addProductTypeController(name);

    if (result === 200) return res.status(200).send("ProductType Appended");
    else return res.status(404).send("Product didn't append");
  } catch (e) {
    return res.send("Error /addProductType");
  }
});

module.exports = router;
