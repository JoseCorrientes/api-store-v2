const { Router } = require("express");
const router = Router();
const getInvoiceController = require("./getInvoice.controller");

router.get("/", async (req, res) => {
  try {
    const result = await getInvoiceController();
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getInvoice");
  }
});

module.exports = router;
