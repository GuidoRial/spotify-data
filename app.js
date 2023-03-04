const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const setupRoutes = require("./server/api/routes");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setupRoutes(app);

app.listen("3001", () => {
  console.log("Server running on port 3001");
});
