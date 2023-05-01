const controllers = require('../controllers');
const middlewares = require('../middlewares');

function spotifyRoutes(app) {
  app.get('/spotify/search/song', middlewares.getToken, controllers.spotify.getSongsOptionsByName);
  app.get('/spotify/audio-features/track/:id', middlewares.getToken, controllers.spotify.getTrackAudioFeatures);
  app.get('/spotify/audio-features/album/:id', middlewares.getToken, controllers.spotify.getAlbumAudioFeatures);
  app.get(
    '/spotify/compare/artist/related-artists/:id',
    middlewares.getToken,
    controllers.spotify.compareArtistWithItsRelatedArtists
  );
  app.post('/spotify/me/player', middlewares.getToken, controllers.spotify.handlePlayer);
}

module.exports = spotifyRoutes;
