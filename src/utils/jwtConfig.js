const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, TOKEN_EXPIRES } = require('../configs');

const generateToken = async (payload) => {
  try {
    const token = await jwt.sign(
      { ...payload },
      TOKEN_SECRET,
      { expiresIn: TOKEN_EXPIRES }
    );
    return token;
  } catch (err) {
    throw new Error(`Error generating token: ${err.message}`);
  }
}

const verifyToken = async (token) => {
  try {
    const decodedToken = await jwt.verify(token, TOKEN_SECRET);
    return decodedToken;
  } catch (err) {
    throw new Error(`Error verifying token: ${err.message}`);
  }
}

module.exports = {
  generateToken,
  verifyToken
};
