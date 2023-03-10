const { Router } = require("express");
const router = Router();
const BuyClientBlockProduct = require("./buyClientBlockProduct.controller");


//Se envia el cartid, y el arreglo de productos a comprar y el total
//Verifica las existencias y los precios y devuelve un arreglo de los productos, con las cantidades
//posibles de compras y el precio actualizado
// tambien el monto total de la operacion
// A partir de aca se mandaria al front para que vuelva a una ruta de medio de pago si el cliente acepta 
router.put("/", async (req, res) => {
  try {
    const {cartid, individualproducts, total } = req.body;
    
    const cart = parseInt(cartid);
    const totalValue = parseFloat(total);

    const result = await BuyClientBlockProduct(cart, individualproducts, totalValue);

    if (result) return res.status(200).json(result);
    else return res.status(404).json([]);
  } catch (e) {
    return res.send("Error /getAuthor");
  }
});

module.exports = router;
