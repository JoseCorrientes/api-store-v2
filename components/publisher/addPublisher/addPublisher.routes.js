const { Router } = require("express");
const router = Router();
const addPublisherController = require("./addPublisher.controller");

router.post("/", async (req, res) => {
  try {
    const { name, address, city, country } = req.body;

    const result = await addPublisherController(name, address, city, country);

    if (result === 200) return res.status(200).send("Publisher Appended");
    else return res.status(404).send("Publisher didn't append");
  } catch (e) {
    return res.send("Error /addPublisher");
  }
});

module.exports = router;
