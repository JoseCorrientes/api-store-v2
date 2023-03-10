const newPool = require("../../../database/database");
const sqlText = require("./getProduct.sql");

//Debe recibirse author(numero o cero si no se busca, isbn string si se busca o vacio si no se busca
//productid numero o cero si no se busca)
//Se mira primero isbn, si no es vacio se busca por isbn
//Se mira segundo por productid, si no es cero se busca por productid
//Se mira tercero por authorid si es cero se devuelven TODOS los productos
//si es >0 se busca por author
async function getProductController(author, isbn, product) {
  try {
    if (isbn !== "") {
      const result = await newPool.query(sqlText[2], [isbn]);
      return result.rows;
    }
    if (product > 0) {
      const result = await newPool.query(sqlText[3], [product]);
      return result.rows;
    }
    if (author > 0) {
      const result = await newPool.query(sqlText[1], [author]);
      return result.rows;
    } else {
      const result = await newPool.query(sqlText[0], []);
      return result.rows;
    }
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getProductController;
