var db=require('./../../sqldb')();
var thermometer = require('./thermometer.model.js')();

var thermometerHandler = {
	getAllthermometers: (req, res)=>{
		thermometer.getAllthermometers(db, req)
		.then((data) =>{
        res.status(200).send(data)
		})
		.catch((err) =>{
			res.sendStatus(500).send({
          message:'Internal Server Error'
      })
		})
	},
	addTemperature: (req, res) => {
		console.log("hello")
		if(req.body){
			thermometer.addTemperature(db, req)
			.then((data) =>{
				res.sendStatus(200).send(req.body)
			})
			.catch((err) =>{
				res.sendStatus(500).send({
					message:'Internal Server Error'
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
