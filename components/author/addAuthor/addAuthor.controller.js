const newPool = require("../../../database/database");
const sqlText = require("./addAuthor.sql");
const getAuthorController = require("../getAuthor/getAuthor.controller");

async function addAuthorController(name, lastname) {
  try {
    let result = await getAuthorController();
    let lastIndex = 0;
    let encontrado = false;
    if (result.length > 0) {
      for (let n = 0; n < result.length; n++) {
        if (result[n].authorid > lastIndex)
          lastIndex = result[n].authorid;
        if (
          result[n].name.toLowerCase() === name.toLowerCase() &&
          result[n].lastname.toLowerCase() === lastname.toLowerCase()
        )
          encontrado = true;
      }
    }
    if (encontrado) return 400;
    let result3 = await newPool.query(sqlText[0], [lastIndex + 1, name, lastname]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addAuthorController;
