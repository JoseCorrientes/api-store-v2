const newPool = require("../../../database/database");
const sqlText = require("./addPublisher.sql");
const getPublisherController = require("../getPublisher/getPublisher.controller");

async function addPublisherController(name, address, city, country) {
  try {
    let result = await getPublisherController();
    let lastIndex = 0;
    let encontrado = false;
    if (result.length > 0) {
      for (let n = 0; n < result.length; n++) {
        if (result[n].publisherid > lastIndex)
          lastIndex = result[n].publisherid;

          if (          (result[n].name.toLowerCase() === name.toLowerCase()) &&  
                        (result[n].address.toLowerCase() === address.toLowerCase()) &&  
                        (result[n].city.toLowerCase() === city.toLowerCase()) &&  
                        (result[n].country.toLowerCase() === country.toLowerCase())  
            )
          encontrado = true;
      }
    }
    if (encontrado) return 400;
    let result3 = await newPool.query(sqlText[0], [lastIndex + 1, name, address, city, country]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = addPublisherController;
