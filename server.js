const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// init express
const app = express();
// init env
dotenv.config({ path: './config/config.env' });

// setup PORT
const PORT = process.env.PORT || 5000;

// GET from server
app.get('/', (req, res) => {
  res.send('Hello BigDay');
});
// server listening
app.listen(PORT, console.log(`Server OK: ${process.env.PORT}`.yellow.bold));
