const db = require('../utils/db');

const { USERS_COLUMNS } = require('./columns');
const { USERS } = require('./tables');

const getLinkUsers = async () => {
  const query = db.select(USERS_COLUMNS)
    .from(USERS)

  return query;
};

module.exports = {
  getLinkUsers,
};
