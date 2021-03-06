'use strict';
// Development specific configuration
// ==================================
module.exports = {
  sequelize: {
    uri: 'Postgres://postgres:postgres@localhost:5432/thermometer',
    options: {
      logging: false,
      dialect: 'postgres',
      define: {
        timestamps: true,
        underscored: true,
         freezeTableName: true,
    }
    }
  },
  // Seed database on startup
 seedDb: true,
};
