const BigDay = require('../models/BigDay');

// @desc   get all bigDays
// @route  GET /api/v1/bigDays
// @access Public
const getBigDays = async (req, res, next) => {
  try {
    const bigDays = await BigDay.find();

    return res.status(200).json({
      success: true,
      count: bigDays.length,
      data: bigDays,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc   add new bigDay
// @route  POST /api/v1/bigDays
// @access Public
const addBigDay = async (req, res, next) => {
  try {
    // create new data by request
    const bigDay = await BigDay.create(req.body);

    // res after add new data
    return res.status(201).json({
      success: true,
      data: bigDay,
    });
  } catch (err) {
    if ((err.name = 'ValidationError')) {
      // get the error messages from model
      const messages = Object.values(err, errors).map((val) => val.messages);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// @desc   remove bigDay
// @route  DELETE /api/v1/bigDays/:id
// @access Public
const deleteBigDay = (req, res, next) => {
  res.send('DELETE bigDay');
};

module.exports = {
  getBigDays,
  addBigDay,
  deleteBigDay,
};
