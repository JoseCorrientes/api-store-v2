const newPool = require("../../../database/database");
const sqlText = require("./getBuyProduct.sql");

//Debe recibirse product(numero o cero si no se busca, isbn string si se busca o vacio si no se busca
//distributor numero o cero si no se busca)
//Se mira primero isbn, si no es vacio se busca por isbn
//Se mira segundo por product, si no es cero se busca por productid
//Se mira tercero por distributor si es cero se devuelven TODOS los productos
//si es >0 se busca por distributor
async function getBuyProductController(product, distributor, isbn) {
  try {
    if (isbn !== "") {
      const result = await newPool.query(sqlText[0], [isbn]);
      return result.rows;
    }
    if (product > 0) {
      const result = await newPool.query(sqlText[1], [product]);
      return result.rows;
    }
    if (distributor > 0) {
      const result = await newPool.query(sqlText[2], [distributor]);
      return result.rows;
    } else {
      const result = await newPool.query(sqlText[3], []);
      return result.rows;
    }
  } catch (e) {
    return `Error  ${e}`;
  }
}

module.exports = getBuyProductController;
