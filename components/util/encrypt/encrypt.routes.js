const { Router } = require("express");
const router = Router();
const encryptController = require("./encrypt.controller");


router.post("/", async (req, res) => {
  try {
    const { msg } = req.body;
    const cipherTxt = encryptController(msg);
    return res.json({ cipherPasword: cipherTxt });
  } catch (e) {
    return res.send("Error en /encrypt");
  }
});

module.exports = router;
