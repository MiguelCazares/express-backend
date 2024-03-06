const {
    USERS
} = require('./tables');

const USERS_COLUMNS = {
    id: `${USERS}.id`,
    name: `${USERS}.name`,
    email: `${USERS}.email`,
};

module.exports = {
    USERS_COLUMNS
};