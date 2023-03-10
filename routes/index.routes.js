const express = require("express");

const getProductType = require("../components/productType/getProductType/getProductType.routes");
const addProductType = require("../components/productType/addProductType/addProductType.routes");
const deleteProductType = require("../components/productType/deleteProductType/deleteProductType.routes");

const getAuthor = require("../components/author/getAuthor/getAuthor.routes");
const addAuthor = require("../components/author/addAuthor/addAuthor.routes");
const deleteAuthor = require("../components/author/deleteAuthor/deleteAuthor.routes");

const getPublisher = require("../components/publisher/getPublisher/getPublisher.routes");
const addPublisher = require("../components/publisher/addPublisher/addPublisher.routes");
const deletePublisher = require("../components/publisher/deletePublisher/deletePublisher.routes.js");

const getProduct = require("../components/product/getProduct/getProduct.routes");
const addProduct = require("../components/product/addProduct/addProduct.routes");
const deleteProduct = require("../components/product/deleteProduct/deleteProduct.routes");
const modifyQuantityProduct = require("../components/product/modifyQuantityProduct/modifyQuantityProduct.routes");

const getBuyProduct = require("../components/buyProduct/getBuyProduct/getBuyProduct.routes");
const addBuyProduct = require("../components/buyProduct/addBuyProduct/addBuyProduct.routes");

const getShoppingCart = require ("../components/shoppingCart/getShoppingCart/getShoppingCart.routes.js");
const deleteShoppingCart = require("../components/shoppingCart/deleteShoppingCart/deleteShoppingCart.routes");
const addEmptyShoppingCart = require("../components/shoppingCart/addEmptyShoppingCart/addEmptyShoppingCart.routes");
const addProductShoppingCart = require("../components/shoppingCart/addProductShoppingCart/addProductShoppingCart.routes");

const buyClientBlockProduct = require("../components/buyClientBlockProduct/buyClientBlockProduct.routes");
const finalSell = require("../components/finalSell/finalSell.routes");
const getInvoice= require("../components/invoice/getInvoice/getInvoice.routes");
const saveInvoice = require("../components/invoice/saveInvoice/saveInvoice.routes");

const routes = (app)=>{
    
    app.use('/getProductType', getProductType);
    app.use('/addProductType', addProductType);
    app.use('/deleteProductType', deleteProductType);

    app.use('/getAuthor', getAuthor);
    app.use('/addAuthor', addAuthor);
    app.use('/deleteAuthor', deleteAuthor);

    app.use('/getPublisher', getPublisher);
    app.use('/addPublisher', addPublisher);
    app.use('/deletePublisher', deletePublisher);

    app.use('/getProduct', getProduct);
    app.use('/addProduct', addProduct);
    app.use('/deleteProduct', deleteProduct);
    app.use('/modifyQuantityProduct', modifyQuantityProduct);

    app.use('/getBuyProduct', getBuyProduct);
    app.use('/addBuyProduct', addBuyProduct);

    app.use('/getShoppingCart', getShoppingCart);
    app.use('/deleteShoppingCart', deleteShoppingCart);
    app.use('/addEmptyShoppingCart', addEmptyShoppingCart);
    app.use('/addProductShoppingCart', addProductShoppingCart);
    
    app.use('/buyClientBlockProduct', buyClientBlockProduct);
    app.use('/finalSell', finalSell);
    app.use('/getInvoice', getInvoice);
    app.use('/saveInvoice', saveInvoice);
    
}

module.exports = routes;
