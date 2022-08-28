const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const lyricsFinder = require("lyrics-finder");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/lyrics", async (req, res) => {
  console.log(req.query);
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) ||
    "no lyrics found";

  res.json({ lyrics });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:8080/login",
    clientId: "765707358be3421695e00c9aebb02c4c",
    clientSecret: "61d25422b5984e9eb9d3c509cac4a22b",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(400);
    });
});

app.listen("3001", () => {
  console.log("listening on port 3001");
});
