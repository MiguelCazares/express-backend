const { USERS } = require('../src/repositories/tables');

exports.up = (knex) => knex.schema.createTable(USERS, (table) => {
    table.bigIncrements('id').primary().index();
    table.string('name', 255).notNullable();
    table.string('email', 255).notNullable().unique().index();

    table.timestamp(true, true);
});

exports.down = (knex) => knex.schema.dropTable(USERS);    