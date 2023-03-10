const { Router } = require("express");
const router = Router();
const deleteAuthorController = require("./deleteAuthor.controller");

router.delete("/", async (req, res) => {
  try {
    const { authorid } = req.body;
    let author = parseInt(authorid);

    const result = await deleteAuthorController(author);
    if (result === 200) return res.status(200).send("Author Erased");
    else return res.status(404).send("Author didn'n exist");
  } catch (e) {
    return res.send("Error /deleteAuthor");
  }
});

module.exports = router;
