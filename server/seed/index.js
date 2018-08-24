'use strict'

let models = require('../sqldb')();
let thermometer = models.thermometer;

module.exports = () => {
	return thermometer.bulkCreate(require('./thermometer')())
	.catch((err)=>{
		console.log(err)
	})
}
