const newPool = require("../../../database/database");
const sqlText = require("./saveInvoice.sql");

async function saveInvoiceController(
  invoicenumber,
  individualproducts,
  total,
  client
) {
  try {
    const totalValue = parseFloat(total);
    const today = new Date();
    const individualproductsString = JSON.stringify(individualproducts);

    //Esto deberia generarse con algun algoritmo por ahora lo pongo como string para mostrar
    const generatedInvoiceNumber = "abc--234324234234";
    let result = await newPool.query(sqlText[0], [
      invoicenumber + 1,
      today,
      generatedInvoiceNumber,
      individualproductsString,
      totalValue,
      client,
    ]);
    if (result.rowCount < 1) return 400;
    return 200;
  } catch (e) {
    return `Error - ${e}`;
  }
}

module.exports = saveInvoiceController;
