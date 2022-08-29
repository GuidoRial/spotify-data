const controllers = require("../controllers");

function lyricsRoutes(app) {
  app.get("/lyrics", controllers.lyrics.getLyrics);
}

module.exports = lyricsRoutes;
