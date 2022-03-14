// Import & implemment Express
const express = require('express');
const app = express();

// Import modular routers
const apiRouter = require('./api-routes');
const htmlRouter = require('./html-routes');

// Middleware
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// Export router middleware
module.exports = app;