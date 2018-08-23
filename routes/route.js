let path= require('path');
module.exports = (app) => {
    const apiRoutes = require('./apiRoute')(app);
    app.use('/api',require('./apiRoute'));
}
