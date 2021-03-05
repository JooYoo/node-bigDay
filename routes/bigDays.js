const express = require('express');
const {
  getBigDays,
  updateBigDay,
  addBigDay,
  deleteBigDay,
} = require('../controllers/bigDays');

// init Router
const router = express.Router();

// root Router
router.route('/').get(getBigDays).post(addBigDay);
router.route('/:id').patch(updateBigDay).delete(deleteBigDay);

module.exports = router;
