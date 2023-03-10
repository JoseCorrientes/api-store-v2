const { Router } = require("express");
const router = Router();
const addAuthorController = require("./addAuthor.controller");

router.post("/", async (req, res) => {
  try {
    const { name, lastname } = req.body;

    const result = await addAuthorController(name, lastname);

    if (result === 200) return res.status(200).send("Author Appended");
    else return res.status(404).send("Author didn't append");
  } catch (e) {
    return res.send("Error /addAuthor");
  }
});

module.exports = router;
