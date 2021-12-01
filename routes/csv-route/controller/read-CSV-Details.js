'use strict'; 
const readService = require('../service/la-casa-service')



const readCSVController = async (req, res) => {
    try {
        let result = await readService.readCSVService();
        console.log("result is !",result);
    
        if(result.length > 0){
            res.json({status: 200, message: "Successfully read csv ", body: result})
        } else {
            res.json({status: 300, message: "Something went wrong in reading csv! ", body: result})
        }
    } catch(err) {
        return res.json({ status: 500, message: "Internal Server Error!" })
    }

}

module.exports = readCSVController;
