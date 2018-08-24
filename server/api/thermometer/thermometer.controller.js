var db=require('./../../sqldb')();
var thermometer = require('./thermometer.model.js')();

var thermometerHandler = {
	getAllTemperature: (req, res)=>{
		thermometer.getAllTemperature(db, req)
		.then((data) =>{
			let final = [];
			data.rows.map((item, index)=>{
				item.dataValues.temperature.map((item2,index2)=>{
					if(new Date(item2.timestamp) > new Date(req.body.date)){
						final.push({
							"temperature": item2.temperature,
							"timestamp": item2.timestamp,
							"index": index2
						})
					}
				})
			})
			res.json({
				final,
				error: false
			})
		})
		.catch((err) =>{
			res.json({
				message:'Internal Server Error',
				err,
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
			res.json({
				message:'Bad Request',
				error: true
			})
		}
	}
}

module.exports = thermometerHandler;
