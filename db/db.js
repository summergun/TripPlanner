const Sequelize = require( 'sequelize' );

const connectDB = process.env.DATABASE_URL || 'postgres://localhost/tripplanner';
const db = new Sequelize(connectDB, {
    logging: false
});

module.exports = db;
