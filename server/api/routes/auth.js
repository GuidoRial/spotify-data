const controllers = require('../controllers');

function authenticationRoutes(app) {
  app.post('/login', controllers.auth.login);
  app.post('/refresh', controllers.auth.refreshAccessToken);
}

module.exports = authenticationRoutes;
