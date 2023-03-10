const newPool = require("../../../database/database");
const sqlText = require("./getPublisher.sql");

async function getPublisherController() {
  try {
    const result = await newPool.query(sqlText[0], []);

    return result.rows;
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getPublisherController;
