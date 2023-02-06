const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const { PORT, DB_ADDRESS } = require('./utils/serverConfig');

mongoose.set('strictQuery', false);
mongoose.connect(DB_ADDRESS);

app.get('/', (req, res) => {
  res.status(200);
    res.send('Welcome to Doggo-API');
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log('App is listening on port ' + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
