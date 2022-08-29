const controllers = require("../controllers");

function authenticationRoutes(app) {
  app.post("/login", controllers.auth.login);
}

module.exports = authenticationRoutes;
