const { Router } = require("express");
const router = Router();
const decryptController = require("./decrypt.controller");

router.post("/", (req, res) => {
  try {
    const { ciphermsg } = req.body;
    const msg = decryptController(ciphermsg);
    return res.status(200).json({ originalPassword: msg });
  } catch (e) {
    return res.send("Error /decrypt");
  }
});

module.exports = router;
