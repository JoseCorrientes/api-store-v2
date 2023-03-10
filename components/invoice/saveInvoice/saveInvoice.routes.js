const { Router } = require("express");
const router = Router();
const saveInvoiceController = require("./saveInvoice.controller");

router.post("/", async (req, res) => {
  try {
    const { invoicenumber, individualproducts, total } = req.body;
    const result = await saveInvoiceController(invoicenumber, individualproducts, total);



    
    if (result === 200) return res.status(200).send("Invoice Appended");
    else return res.status(404).send("Invoice didn't append");
  } catch (e) {
    return res.send("Error /addInvoice");
  }
});

module.exports = router;
