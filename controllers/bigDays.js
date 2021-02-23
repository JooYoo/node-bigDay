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
const addBigDay = (req, res, next) => {
  res.send('POST bigDay');
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
