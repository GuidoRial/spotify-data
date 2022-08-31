const SpotifyWebApi = require("spotify-web-api-node");

module.exports = {
  async login(req, res) {
    try {
      const code = req.body.code;
      const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:8080/login",
        clientId: "765707358be3421695e00c9aebb02c4c",
        clientSecret: "61d25422b5984e9eb9d3c509cac4a22b",
      });

      const data = await spotifyApi.authorizationCodeGrant(code);

      return res.status(200).json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
