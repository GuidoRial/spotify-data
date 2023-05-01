const axios = require('axios');
const aux = require('../auxiliar');

const BASE_URL = 'https://api.spotify.com/v1';

const SpotifyService = {
  async getSongsOptionsByName(q, options) {
    try {
      let res = await axios.get(`${BASE_URL}/search?type=track&q=${q}`, options);
      let result = res.data.tracks.items;
      let tracks = result.map((track) => {
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
      let res = await axios.get(`${BASE_URL}/tracks/${id}`, options);
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
      let res = await axios.get(`${BASE_URL}/audio-features/${id}`, options);
      const filterCb = ([key, value]) => {
        if (
          ![
            'key',
            'tempo',
            'type',
            'track_href',
            'analysis_url',
            'duration_ms',
            'time_signature',
            'speechiness',
            'liveness',
            'instrumentalness',
          ].includes(key)
        ) {
          return true;
        }
      };

      return aux.filterOutKeys(res.data, filterCb);
    } catch (e) {
      console.log(e.message, e.stack);
      throw e;
    }
  },
  async getState(options) {
    const res = await axios.get(`${BASE_URL}/me/player/`, options);
    return res.data;
  },
  async handlePlayer({ action, uri, options }) {
    const url = `${BASE_URL}/me/player/${action}`;

    try {
      switch (action) {
        case 'next':
        case 'previous':
          return await axios.post(url, null, options);

        case 'pause':
          return await axios.put(url, {}, options);
        case 'play':
        default: {
          const songData = { uris: [uri] };
          if (!uri) {
            const state = await this.getState(options);
            songData.uris[0] = state.item.uri;
            songData.position_ms = state.progress_ms;
          }

          return await axios.put(url, songData, options);
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = SpotifyService;
