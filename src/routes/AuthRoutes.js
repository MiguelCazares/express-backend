const router = require('express').Router();

const AuthController = require('../controllers/AuthController');
const { validateToken, authorize } = require('../middlewares/jwtValidate');

const { PERMISSIONS } = require('../configs/modulesAndPermissions');

router.post('/login', AuthController.login);
router.get('/private', [validateToken, authorize(PERMISSIONS.CHANGE_STATUS_QUOTATIONS)], AuthController.private);

module.exports = router;
