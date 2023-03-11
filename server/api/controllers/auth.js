const axios = require('axios');

const _requestHandler = async ({ code, refresh_token }) => {
  try {
    const url = `${process.env.BASE_URL}/api/token`;

    let details = {};

    if (code && !refresh_token) {
      details = {
        code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code',
      };
    } else {
      details = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      };
    }

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

    return response;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  async login(req, res) {
    try {
      const response = await _requestHandler({ code: req.body.code });

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
      const response = await _requestHandler({ refresh_token: req.body.refresh_token });

      const {
        data: { access_token },
      } = response;

      return res.status(200).json({
        accessToken: access_token,
      });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
