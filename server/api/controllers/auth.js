const SpotifyWebApi = require("spotify-web-api-node");

module.exports = {
  async login(req, res) {
    try {
      const code = req.body.code;
      const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:8080/login",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
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
