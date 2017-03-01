const tripDB = require( './db' );

const Restaurant = tripDB.define('restaurant', {
    name: tripDB.Sequelize.STRING,
    cuisine: tripDB.Sequelize.STRING,
    price: tripDB.Sequelize.INTEGER
});

module.exports = Restaurant;
