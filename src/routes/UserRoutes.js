const router = require('express').Router();

const UserController = require('../controllers/UserController');
const { validateToken, authorize } = require('../middlewares/jwtValidate');

const { PERMISSIONS } = require('../configs/modulesAndPermissions');

router.get('/', [validateToken, authorize(PERMISSIONS.CHANGE_STATUS_QUOTATIONS)], UserController.getLinkUsers);

module.exports = router;
