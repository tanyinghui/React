/**
 * Up users table.
 *
 * @param  {object} knex
 *
 */
exports.up = function(knex) {
    console.log('generating users table');
    
return knex.schema.createTable('users', table => {
        table.timestamp('created_at');
        table.increments('id').primary().unsigned();
        table.string('phone').notNullable();
        table.string('activity').notNullable();
    });
};

/**
 * Drop users table.
 *
 * @param  {object} knex
 *
 */
exports.down = function(knex) {
    console.log('dropping users table');
    
return knex.schema.dropTable('users');
};