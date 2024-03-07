const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../utils/jwtConfig');
const { ROLES } = require('../configs/modulesAndPermissions');

const login = async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password', salt);

    const token = await generateToken({ id: 1, name: 'Miguel Cazares', role: ROLES.SUPER_ADMIN});

    const verify = await verifyToken(token);

    return { token, verify , hashedPassword };
  } catch (err) {
    console.error(err);
  }
}

const getLinkUsers = async (req, res, next) => {
  try {
    return res.send('Private');
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  login,
  getLinkUsers,
};
