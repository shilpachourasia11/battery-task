let data = require('./../../config/db');
let sequelize = data.sequelize;
let connection = data.connection;
let axios = require('axios')

module.exports=function(){
let rating= connection.define('rating',{
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
    monthly: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    hourly: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    daily: {
       type: sequelize.TEXT,
       allowNull: false,
    },
    status: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }
)
rating.associate = function(db) {
  db.rating.belongsTo(db.work_space)
}
return rating;
};
