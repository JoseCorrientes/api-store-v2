const { Router } = require("express");
const router = Router();
const getProductTypeController = require("./getProductTypes.controller");

router.get("/", async (req, res) => {
  try {
    const result = await getProductTypeController();
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getProductType");
  }
});

module.exports = router;
