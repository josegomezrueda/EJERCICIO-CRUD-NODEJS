const express = require('express')
const app = express()
require('dotenv').config({ path: './db.env' });
const port = process.env['PORT'];
const url = process.env['URL_DB'];
const mongoose = require('mongoose');
mongoose.connect(url);


app.use(express.json());

var controller = require("./Controller");

controller.Controller(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
