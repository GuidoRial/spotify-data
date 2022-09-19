const axios = require("axios");

const SpotifyService = {
  async getSongsOptionsByName(q, options) {
    try {
      let res = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${q}`, options);
      let result = res.data.tracks.items;
      let tracks = result.map(track => {
        return {
          songUri: track.uri,
          track_name: track.name,
          track_id: track.id,
          duration: track.duration_ms,
          artist_name: track.artists[0].name,
          artist_id: track.artists[0].id,
          album_name: track.album.name,
          album_image: track.album.images[0].url,
          album_id: track.album.id,
        };
      });

      return tracks;
    } catch (e) {
      console.log(e.message, e.stack);
      throw e;
    }
  },
  async getTrackById(id, options) {
    try {
      let res = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, options);
      let response = res.data;
      let song = {
        songUri: response.uri,
        track_name: response.name,
        track_id: response.id,
        duration: response.duration_ms,
        artist_name: response.artists[0].name,
        artist_id: response.artists[0].id,
        album_name: response.album.name,
        album_image: response.album.images[0].url,
        album_id: response.album.id,
      };
      return song;
    } catch (e) {
      console.log(e.message, e.stack);
      throw e;
    }
  },
  async getTrackAudioFeatures(id, options) {
    try {
      let res = await axios.get(`https://api.spotify.com/v1/audio-features/${id}`, options);
      return res.data;
    } catch (e) {
      console.log(e.message, e.stack);
      throw e;
    }
  },
};

module.exports = SpotifyService;
