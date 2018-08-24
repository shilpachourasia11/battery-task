'use strict';

let faker = require('faker');

module.exports = () => {
	let thermometer = [];

	thermometer.push({
		id: 1,
		deviceSerialNumber: "1",
		temperature: [],
		created_at: new Date(),
		updated_at: new Date()
	})
	return thermometer;
}
