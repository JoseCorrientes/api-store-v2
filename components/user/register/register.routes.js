const {Router} = require("express");
const router=Router();
const registerController = require ("./register.controller.js")

router.post("/", async(req, res)=>{
    try{
         const { email, username, name, lastname, passwordAES, address, state, city,country,image, cartid} = req.body;
         
         const result= await registerController(email, username, name, lastname, passwordAES, address, state, city, country,image, cartid);
         if (result===403) return res.status(400).json({ error: true, msg: 'Useremail and Username duplicated'});
         if (result===401) return res.status(400).json({ error: true, msg: 'Username duplicated'});
         if (result===402) return res.status(400).json({ error: true, msg: 'Useremail duplicated'});
         if  (result===400) return res.status(400).json({ error: true, msg: "User didn't registered"});   
         else return res.status(200).json({ error: false, msg: "User was registered"});   
    } catch(e) {
        return res.send(`Error /register`);
    }
})

module.exports=router;

