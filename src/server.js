'use strict';

const authPlugin = require('./auth/auth.plugin');
const config = require('./config/config');
const Hapi = require('hapi');
const routes = require('./routes');
const userRoutes = require('./users/users.routes');

async function createServer () {

  const server = Hapi.server({
    port: config.get('PORT'),
  });

  await server.register(authPlugin);

  server.route(routes);
  server.route(userRoutes);

  return server;
};

module.exports = { createServer };
