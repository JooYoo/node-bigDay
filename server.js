const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// init express
const app = express();
// init env
dotenv.config({ path: './config/config.env' });
// init route
const bigDays = require('./routes/bigDays');
// init db
const connectDB = require('./config/db');
connectDB();

// enable BodyParser to allow add new data as json
app.use(express.json());

// setup PORT
const PORT = process.env.PORT || 5000;

// GET from server
app.use('/api/v1/bigDays', bigDays);

// server listening
app.listen(PORT, console.log(`Server OK: ${process.env.PORT}`.yellow.bold));
