const authenticationRoutes = require("./auth");
const lyricsRoutes = require("./lyrics");
const sentimentAnalysisRoutes = require("./sentimentAnalysis");

const setupRoutes = (app) => {
  authenticationRoutes(app);
  lyricsRoutes(app);
  sentimentAnalysisRoutes(app);
};

module.exports = setupRoutes;
