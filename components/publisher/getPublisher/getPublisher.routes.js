const { Router } = require("express");
const router = Router();
const getPublisherController = require("./getPublisher.controller");

router.get("/", async (req, res) => {
  try {
    const result = await getPublisherController();
    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getPublisher");
  }
});

module.exports = router;
