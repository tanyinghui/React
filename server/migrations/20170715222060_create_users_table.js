/**
 * Up users table.
 *
 * @param  {object} knex
 *
 */

exports.up = function(knex, Promise) {
    return new Promise(async (resolve, reject) => {
        try {
            await Promise.all([
                knex.schema.createTable('customer', function(customer) {
                    customer.timestamp('created_at');
                    customer.string('phone').primary().notNullable();
                    customer.timestamp('updated_at');
                }).createTable('transaction_log', function(transaction_log) {
                    transaction_log.timestamp('created_at');
                    transaction_log.string('receipent').references('phone').inTable('customer');
                    transaction_log.string('deliverer').references('phone').inTable('customer');
                    transaction_log.increments('object_id').primary().unsigned();
                    transaction_log.string('activity').notNullable().default('Deliver');
                    transaction_log.timestamp('updated_at');
                }).createTable('box_status', function(box_status) {
                    box_status.string('receipent').references('phone').inTable('customer');
                    box_status.string('object_id').notNullable().default(' ');
                    box_status.string('shelf_id').primary();
                    box_status.timestamp('updated_at');
                    box_status.timestamp('created_at');
                }).then(function() {
                    return knex('box_status').insert([
                        {shelf_id: "1"},
                        {shelf_id: "2"},
                        {shelf_id: "3"},
                        {shelf_id: "4"},
                        {shelf_id: "5"},
                        {shelf_id: "6"}
                    ]);
                }),
            ]);

            console.log('Tables created successfully');
            resolve();
        } 
        catch(error) {
            reject(error);
        }
    })
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
