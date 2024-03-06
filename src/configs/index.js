const assert = require('assert');

if (process.env.APP_ENV !== 'production') {
    require('dotenv').config();
}

const {
    APP_ENV = 'dev',
    APP_ROOT = 'http://localhost',
    PORT = 3000,
    APP_NAME = 'ftech-cotizador-api',
    DATABASE = 'postgres://postgres:secret@localhost:5432/postgres',
} = process.env;

assert(APP_ENV, 'Missing APP_ENV');
assert(PORT, 'Missing PORT');
assert(APP_NAME, 'Missing APP_NAME');
assert(DATABASE, 'Missing DATABASE');

module.exports = {
    APP_ENV,
    APP_ROOT,
    PORT,
    APP_NAME,
    ROOT_PATH: `/api/${APP_NAME}`,
    DATABASE_CONFIG: {
        client: 'pg',
        connection: DATABASE,
        pool: { min: 0, max: 10 },
        acquireConnectionTimeout: 2000,
    }
};