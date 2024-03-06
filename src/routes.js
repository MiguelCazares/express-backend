const router = require('express').Router();
require('express-async-errors');

const AuthRoutes = require('./routes/AuthRoutes');

router.use('/auth', AuthRoutes);

router.get('/health-check', (req, res) => {
    res.send('OK');
});

module.exports = router;
