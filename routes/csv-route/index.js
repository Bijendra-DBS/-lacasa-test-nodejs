const express = require('express');
const routes = express.Router();
var laCasaCtrl = require('./controller/index');

routes.post('/readDetails', laCasaCtrl.readCSVCtrl);
routes.post('/writeDetails', laCasaCtrl.writeCSVCtrl);


module.exports = routes;
