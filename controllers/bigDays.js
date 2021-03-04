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
const deleteBigDay = async (req, res, next) => {
  try {
    // get the delete record by id
    const bigDay = await BigDay.findById(req.params.id);
    // can NOT found record response
    if (!bigDay) {
      return res.status(404).json({
        success: false,
        error: 'No BigDay found',
      });
    }
    // remove the record
    await bigDay.remove();
    // remove success response
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

module.exports = {
  getBigDays,
  addBigDay,
  deleteBigDay,
};
