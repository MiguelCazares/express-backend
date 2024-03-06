const { verifyToken } = require('../utils/jwtConfig');
const { validatePermissions } = require('../utils/validatePermissions');

const validateToken = async (req, res, next) => {
  const auth_key = req.header('auth-key');

  if (!auth_key) {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }

  try {
    const decodedToken = await verifyToken(auth_key);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: `Acceso no autorizado ${error.message}` });
  }
};

const authorize = (module_name) => async (req, res, next) => {
  try {
    const role = req.user.role;
    validatePermissions(module_name, role);
    next();

  } catch (err) {
    return res.status(500).json({ message: `Acceso no autorizado ${err.message}` });
  }
}

module.exports = {
  validateToken,
  authorize,
}
