const AuthService = require('../services/AuthService');

const login = async (req, res, next) => {
  try {
    const response = await AuthService.login();

    return res.send(response);
  } catch (err) {
    console.error(err);
  }
}

const private = async (req, res, next) => {
  try {
    return res.send('Private');
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  login,
  private,
};
