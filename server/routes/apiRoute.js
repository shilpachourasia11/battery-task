let express=require('express')
let apiRouter = (app) => {
  app.use('/api/thermometer', require('../api/thermometer'))
};

module.exports = apiRouter
