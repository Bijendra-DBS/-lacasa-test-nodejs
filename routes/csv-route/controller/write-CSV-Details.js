'use strict';
const writeCSVService = require('../service/la-casa-service')

const writeCSVController = async (req, res) => {
    const requestBody = req.body;
     try {
        let writeResult = await writeCSVService.writeCSVService(requestBody)
        if(writeResult){
            res.json({status:200, message: "Successfully written csv!"})    
        } else {
            res.json({status:300, message: "Something went wrong to write csv", body: null})    
        }
    } catch (err)
        {
            return res.json({ status: 500, message: "Internal Server Error!" })
        }
}

module.exports = writeCSVController;
