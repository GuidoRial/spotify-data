const axios = require('axios');

module.exports = {
  async login(req, res) {
    try {
      const url = `${process.env.BASE_URL}/api/token`;

      const details = {
        code: req.body.code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
      };

      const body = new URLSearchParams(details).toString();

      const response = await axios({
        method: 'POST',
        url,
        headers: {
          Authorization: 'Basic ' + Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        data: body,
      });

      const {
        data: { access_token, refresh_token, expires_in },
      } = response;

      return res.status(200).json({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async refreshAccessToken(req, res) {
    try {
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
