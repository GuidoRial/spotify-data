const controllers = require("../controllers");
const middlewares = require("../middlewares");
function sentimentAnalysisRoutes(app) {
  app.get("/sentiment-analysis", middlewares.getLyrics, controllers.sentimentAnalysis.getSentimentAnalysis);
}

module.exports = sentimentAnalysisRoutes;
