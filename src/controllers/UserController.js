const UserService = require('../services/UserService');

const getLinkUsers = async (req, res, next) => {
  try {
    const response = await UserService.getLinkUsers();

    return res.send(response);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
    getLinkUsers,
};
