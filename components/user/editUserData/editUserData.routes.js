const { Router } = require("express");
const router = Router();
const editUserDataController = require("./editUserData.controller");

router.put("/", async (req, res) => {
  try {
    const { email, address, city, state, country, image } = req.body;
    const result = await editUserDataController(
      email,
      address,
      city,
      state,
      country,
      image
    );
    if (result === 200)
      return res.status(200).json({ updated: true, email: true });
    if (result == 404)
      return res.status(404).json({ updated: false, email: false });
    else return res.status(404).json({ updated: false, email: true });
  } catch (e) {
    return res.send(`Error /editUserData`);
  }
});

module.exports = router;
