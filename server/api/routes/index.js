const authenticationRoutes = require("./auth");

const setupRoutes = (app) => {
  authenticationRoutes(app);
};

module.exports = setupRoutes;
