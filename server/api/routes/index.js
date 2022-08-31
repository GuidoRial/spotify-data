const authenticationRoutes = require("./auth");
const lyricsRoutes = require("./lyrics");
const spotifyRoutes = require("./spotify");

const setupRoutes = (app) => {
  authenticationRoutes(app);
  lyricsRoutes(app);
  spotifyRoutes(app);
};

module.exports = setupRoutes;
