const router = require('express').Router();
require('express-async-errors');

const AuthRoutes = require('./routes/AuthRoutes');
const UserRoutes = require('./routes/UserRoutes');

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);

router.get('/health-check', (req, res) => {
    res.send('OK');
});

module.exports = router;
