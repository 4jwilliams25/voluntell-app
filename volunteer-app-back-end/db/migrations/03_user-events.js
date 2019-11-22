
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user-events', table => {
      table.increments();
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .notNullable();
      table
        .integer('event_id')
        .references('id')
        .inTable('events')
        .onDelete('cascade')
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user-events')
};
