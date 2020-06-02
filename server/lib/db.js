const { Model } = require('objection');

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'book_store_2_db',
  },
});


Model.knex(knex);

module.exports = knex;
