var db=require('./../../sqldb')();
var thermometer = require('./thermometer.model.js')();

var thermometerHandler = {
	getAllthermometers: (req, res)=>{
		thermometer.getAllthermometers(db, req)
		.then((data) =>{
			res.json({
				data,
				error: false
			})
		})
		.catch((err) =>{
			res.json({
				message:'Internal Server Error',
				error: true
			})
		})
	},
	addTemperature: (req, res) => {
		if(req.body){
			thermometer.addTemperature(db, req)
			.then((data) =>{
				res.json({
					data,
					error: false
				})
			})
			.catch((err) =>{
				res.json({
					message:'Internal Server Error',
					error: true
				})
			})
		}
		else {
			res.sendStatus(400).send({
				message:'Bad Request'
			})
		}
	}
}

module.exports = thermometerHandler;
