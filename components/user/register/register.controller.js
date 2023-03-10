const newPool = require("../../../database/database");
const sqlText = require("./register.sql");
const getUserController = require("../getUser/getUser.controller");
const decryptController=require("../../util/decrypt/decrypt.controller");
const encryptController = require("../../util/encrypt/encrypt.controller");

async function registerController (email, username, name, lastname, passwordAES, address, state, city,country,image, cartid) {
    try{
        const result = await getUserController();
        const plainPassword = decryptController(passwordAES);
        const password= encryptController(plainPassword);
        let usernameFound=false;
        let emailFound=false;
        let lastIndex = 0;
        if (result.length > 0) {
            for (let n = 0; n < result.length; n++) {
                if (result[n].userid > lastIndex) lastIndex = result[n].userid;
                if(result[n].email===email) emailFound=true;
                if(result[n].username===username) usernameFound=true;
            }
        }
        if (usernameFound) {
            if (emailFound) return 403;
            else return 401;
        }
        if (emailFound) return 402;

        const result2 = await newPool.query(sqlText[0], [lastIndex+1,  email, username, name, lastname, password, address, state, city,country,image, cartid])
        if (result2.rowCount & result2.rowCount>0) return 200;
        return 400;
    } catch (e) {
        return `Error - ${e}`
    }
}

module.exports=registerController;