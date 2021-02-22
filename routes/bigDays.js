const express = require('express');
const {
  getBigDays,
  addBigDay,
  deleteBigDay,
} = require('../controllers/bigDays');

// init Router
const router = express.Router();

// root Router
router.route('/').get(getBigDays).post(addBigDay);

router.route('/:id').delete(deleteBigDay);

module.exports = router;
