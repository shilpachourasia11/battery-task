var controller = require('./thermometer.controller.js');
var express = require('express');
var router = express.Router();

router.get('/getAllthermometers', controller.getAllthermometers)
router.post('/generateTemperature', controller.addTemperature)

module.exports = router;
