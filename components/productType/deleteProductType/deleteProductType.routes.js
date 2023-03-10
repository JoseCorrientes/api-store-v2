const { Router }= require("express");
const router = Router();
const deleteProductTypeController=require("./deleteProductType.controller");

router.delete("/", async(req, res)=> {
    try{
        const {producttype} = req.body;
        let product = parseInt(producttype);

        const result = await deleteProductTypeController(product);
        if (result===200) return res.status(200).send('Product Type Erased');
        else return res.status(404).send("Product Type didn'n exist");

    }catch(e) {
        return res.send('Error /deleteProductType');
    }
})

module.exports=router;
