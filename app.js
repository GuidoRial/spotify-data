const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const lyricsFinder = require("lyrics-finder");
const setupRoutes = require("./server/api/routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setupRoutes(app);

app.get("/lyrics", async (req, res) => {

});

app.listen("3001", () => {
  console.log("Server running on port 3001");
});
