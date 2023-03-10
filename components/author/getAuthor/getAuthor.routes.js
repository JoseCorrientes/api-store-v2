const { Router } = require("express");
const router = Router();
const getAuthorController = require("./getAuthor.controller");

router.get("/", async (req, res) => {
  try {
    const result = await getAuthorController();
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getAuthor");
  }
});

module.exports = router;
