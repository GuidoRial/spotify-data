const controllers = require("../controllers");
const middlewares = require("../middlewares");

function spotifyRoutes(app) {
  app.get("/spotify/search/song", middlewares.getOptionsObject, controllers.spotify.getSongsOptionsByName);
  app.get("/spotify/audio-features/track/:id", middlewares.getOptionsObject, controllers.spotify.getTrackAudioFeatures);
  app.get("/spotify/audio-features/album/:id", controllers.spotify.getAlbumAudioFeatures);
  app.get("/spotify/compare/artist/related-artists/:id", controllers.spotify.compareArtistWithItsRelatedArtists);
}

module.exports = spotifyRoutes;
