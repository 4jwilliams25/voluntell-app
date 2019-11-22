
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', table => {
      table.increments();
      table.string('date').notNullable();
      table.string('time').notNullable();
      table.string('name').notNullable();
      table.string('organization').notNullable();
      table.string('description').notNullable();
      table.integer('volunteers-needed').notNullable()
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
