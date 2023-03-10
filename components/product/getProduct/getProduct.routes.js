const { Router } = require("express");
const router = Router();
const getProductController = require("./getProduct.controller" );

router.get("/", async (req, res) => {
  try {
    const {authorid, isbn, productid}= req.body;
    const author = parseInt(authorid);
    const product = parseInt(productid);
    
    const result = await getProductController(author, isbn, productid);
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getProduct");
  }
});

module.exports = router;
