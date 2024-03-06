const router = require('express').Router();
require('express-async-errors');

router.get('/health-check', (req, res) => {
    res.send('OK');
});

module.exports = router;