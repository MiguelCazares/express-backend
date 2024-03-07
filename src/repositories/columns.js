const {
    USERS
} = require('./tables');

const USERS_COLUMNS = { 
    id: `${USERS}.id`,
    facturatechId: `${USERS}.facturatech_id`,
    facturatechDealerId: `${USERS}.facturatech_dealer_id`,
    linkDealerId: `${USERS}.link_dealer_id`,
    nit: `${USERS}.nit`,
    email: `${USERS}.email`,
    userType: `${USERS}.user_type`,
    name: `${USERS}.name`,
    phone: `${USERS}.phone`,
    status: `${USERS}.status`,
    deviceFrom: `${USERS}.device_from`,
    isDealer: `${USERS}.is_dealer`,
    //password: `${USERS}.password`,
    //passwordResetToken: `${USERS}.password_reset_token`,
    createdAt: `${USERS}.created_at`,
    updatedAt: `${USERS}.updated_at`,
};

module.exports = {
    USERS_COLUMNS
};