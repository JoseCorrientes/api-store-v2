const { Router } = require("express");
const router = Router();
const loginController = require("./login.controller");

router.post("/", async (req, res) => {
  try {
    const { useremail, cipherPassword } = req.body;
    const result = await loginController(useremail, cipherPassword);
    if (result === 200) return res.status(200).json({ validation: true });
    else return res.status(403).json({ validate: false });
  } catch (e) {
    return res.send("Error /login");
  }
});

module.exports = router;


