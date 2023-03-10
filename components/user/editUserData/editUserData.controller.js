const newPool = require("../../../database/database");
const sqlText = require("./editUserData.sql");

async function editUserDataController(
  email,
  address,
  city,
  state,
  country,
  image
) {
  try {
    if ((email === "")) return 404;
    if (
      image === "" &&
      address === "" &&
      city === "" &&
      state === "" &&
      country === ""
    )
      return 400;
    if (
      image !== "" &&
      address !== "" &&
      city !== "" &&
      state !== "" &&
      country !== ""
    ) {
      let result = await newPool.query(sqlText[2], [
        email,
        address,
        state,
        city,
        country,
        image,
      ]);
      if (result.rowCount > 0) return 200;
    }
    if (address !== "" && city !== "" && state !== "" && country !== "") {
      let result = await newPool.query(sqlText[1], [
        email,
        address,
        state,
        city,
        country,
      ]);
      if (result.rowCount > 0) return 200;
    }
    if (image !== "") {
       
      let result = await newPool.query(sqlText[0], [email, image]);
      if (result.rowCount > 0) return 200;
    }
    return 400;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = editUserDataController;
