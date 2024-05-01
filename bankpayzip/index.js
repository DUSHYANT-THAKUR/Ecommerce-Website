const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
var cors = require('cors');
const config = require('./config/config')
const app = express();
const PORT = process.env.PORT || 9240;

app.use(cors({origin:["http://localhost:3000", "http://localhost:3001"]}));
// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(require("./routerBank/route"))


app.listen(process.env.PORT || PORT, (req, res) => {
  console.log("http://" + config.DB_HOST + ":" + PORT);
})