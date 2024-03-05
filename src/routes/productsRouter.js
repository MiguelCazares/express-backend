const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  throw new Error('This is a forced error');
  res.send('GET /products');
});

module.exports = router;
