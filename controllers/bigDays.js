// @desc   get all bigDays
// @route  GET /api/v1/bigDays
// @access Public
const getBigDays = (req, res, next) => {
  res.send('GET bigDays');
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
