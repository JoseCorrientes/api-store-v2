const { Router } = require("express");
const router = Router();
const getUserController = require("./getUser.controller");

router.get("/", async (req, res) => {
  try {
    const result = await getUserController();
    return res.status(200).json(result);
  } catch (e) {
    return res.send("Error /getUser");
  }
});

module.exports = router;
