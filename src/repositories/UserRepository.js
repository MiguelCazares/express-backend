const db = require('../utils/db');

const { USERS_COLUMNS } = require('./columns');
const { USER } = require('./tables');

const getUsers = async () => {
  const query = db(USER)
    .select(USERS_COLUMNS);

  return query;
};

module.exports = {
  getUsers,
};
