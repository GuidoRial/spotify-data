const authenticationRoutes = require("./auth");
const lyricsRoutes = require("./lyrics");
const sentimentAnalysisRoutes = require("./sentimentAnalysis");
const mostcommonWordsRoutes = require("./mostCommonWords");

const setupRoutes = (app) => {
  authenticationRoutes(app);
  lyricsRoutes(app);
  sentimentAnalysisRoutes(app);
  mostcommonWordsRoutes(app);
};

module.exports = setupRoutes;
