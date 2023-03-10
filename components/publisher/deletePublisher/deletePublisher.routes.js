const { Router }= require("express");
const router = Router();
const deletePublisherController=require("./deletePublisher.controller");

router.delete("/", async(req, res)=> {
    try{
        const {publisherid} = req.body;
        let publisher = parseInt(publisherid);

        const result = await deletePublisherController(publisher);
        if (result===200) return res.status(200).send('Publisher Erased');
        else return res.status(404).send("Publisher didn'n exist");

    }catch(e) {
        return res.send('Error /deletePublisher');
    }
})

module.exports=router;
