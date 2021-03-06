/* eslint-disable camelcase */

exports.up = pgm => {
    pgm.createTable('users', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        email: {
            type: 'VARCHAR(255)',
            notNull: true,
        },
        password: {
            type: 'VARCHAR(255)',
            notNull: true,
        }
    })
};

exports.down = pgm => {
    pgm.dropTable('users');
};
