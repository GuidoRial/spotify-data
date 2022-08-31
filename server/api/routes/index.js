const authenticationRoutes = require("./auth");
const lyricsRoutes = require("./lyrics");

const setupRoutes = (app) => {
  authenticationRoutes(app);
  lyricsRoutes(app);
};

module.exports = setupRoutes;
