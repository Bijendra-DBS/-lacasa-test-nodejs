const readCSVController = require('./read-CSV-Details');
const writeCSVController = require('./write-CSV-Details');


// route to particular contoller depending api  
module.exports.readCSVCtrl = readCSVController;
module.exports.writeCSVCtrl = writeCSVController;
