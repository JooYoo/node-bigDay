const express = require('express');

// init Router
const router = express.Router();

// root Router
router.get('/', (req, res) => {
  res.send('Hello BigDay Router');
});

module.exports = router;
