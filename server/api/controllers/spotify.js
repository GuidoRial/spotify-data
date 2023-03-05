const SpotifyService = require('../../../services/SpotifyService');

module.exports = {
  async getSongsOptionsByName(req, res) {
    try {
      const { q } = req.query;

      const tracks = await SpotifyService.getSongsOptionsByName(q, req.optionsObject);
      return res.status(200).json(tracks);
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async getTrackAudioFeatures(req, res) {
    try {
      const { id } = req.params;

      const song = await SpotifyService.getTrackById(id, req.optionsObject);
      const result = await SpotifyService.getTrackAudioFeatures(id, req.optionsObject);

      return res.status(200).json({ audio_features: result, song });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async getAlbumAudioFeatures(req, res) {
    try {
      const { id } = req.params;
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async compareArtistWithItsRelatedArtists(req, res) {
    try {
      const { id } = req.params;
      const country = 'US';
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
