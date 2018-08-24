let data = require('./../../config/db');
let sequelize = data.sequelize;
let connection = data.connection;
let axios = require('axios')

module.exports=function(){
let thermometer= connection.define('thermometer',{
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
    deviceSerialNumber: {
       type: sequelize.STRING
     },
    temperature: {
       type: sequelize.JSONB
    }
  }
);
thermometer.getAllthermometers = function (db, req) {
  let offset = req.query.page*10
  return db.thermometer.findAndCountAll({
    attributes: ['monthly', 'hourly', 'daily'],
    where: {
      status: true
    },
    limit: 10,
    offset: offset,
    include: [
      {
        model: db.thermometer,
        where: {
          status: true
        },
        attributes: ['name','availability','capacity','type','id'],
        required: true
      },
    ]
  })
}

thermometer.addTemperature = function(db, req) {
  console.log(req.body)
  db.thermometer.findOne()
  return db.thermometer.update({
    temperature: {
      temp: req.body,
      timestamp: new Date()
    }
  },
  {
    where:{
      deviceSerialNumber: req.body.thermometerId
    }
  })
}
return thermometer;
};
