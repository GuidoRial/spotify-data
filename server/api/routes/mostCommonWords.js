const controllers = require("../controllers");
const middlewares = require("../middlewares");
function mostcommonWordsRoutes(app) {
  app.get(
    "/most-common-words",
    middlewares.getWords,
    controllers.mostCommonWords.getMostCommonWords
  );
}

module.exports = mostcommonWordsRoutes;
