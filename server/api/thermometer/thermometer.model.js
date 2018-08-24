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
  thermometer.getAllTemperature = function (db, req) {
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
    return db.thermometer.findOne({
      where:{
        deviceSerialNumber: req.body.thermometerId
      }}).then((result)=>{
      let all = result.dataValues.temperature;
      all.push({
        temperature: req.body.temperature,
        timestamp: new Date()
      })

      return db.thermometer.update({
        temperature: all
      },
      {
        where:{
          deviceSerialNumber: req.body.thermometerId
        }
      })
      .then((data)=> {
        return data
      })
    });
  }
  return thermometer;
};
