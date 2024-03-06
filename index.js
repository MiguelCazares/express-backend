const { createApp, getApp } = require('./src/utils/createApp');
const { errorHandler, logErrors } = require('./src/middlewares/errorHandler');
const { 
  ROOT_PATH, 
  APP_ENV,
  APP_NAME, 
  PORT 
} = require('./src/configs');

const environment = { APP_ENV, PORT, APP_NAME };

const routes = require('./src/routes.js');

const middlewares = [logErrors, errorHandler];

const server = createApp(environment, ROOT_PATH, routes, middlewares);

const app = getApp();

module.exports = [app, server];