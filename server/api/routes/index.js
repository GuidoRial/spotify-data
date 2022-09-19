const authenticationRoutes = require("./auth");
const lyricsRoutes = require("./lyrics");
const sentimentAnalysisRoutes = require("./sentimentAnalysis");
const mostcommonWordsRoutes = require("./mostCommonWords");
const spotifyRoutes = require("./spotify");

const setupRoutes = app => {
  authenticationRoutes(app);
  lyricsRoutes(app);
  sentimentAnalysisRoutes(app);
  mostcommonWordsRoutes(app);
  spotifyRoutes(app);
};

module.exports = setupRoutes;
