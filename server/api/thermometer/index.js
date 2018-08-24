var controller = require('./thermometer.controller.js');
var express = require('express');
var router = express.Router();

router.post('/getAllTemperature', controller.getAllTemperature)
router.post('/generateTemperature', controller.addTemperature)

module.exports = router;
