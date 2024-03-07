const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/UserRepository');

const getLinkUsers = async (req, res, next) => {
  try {
    const response = await UserRepository.getLinkUsers();

    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
    getLinkUsers,
};
