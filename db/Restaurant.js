const tripDB = require('./db');

const attr = {
    name: tripDB.Sequelize.STRING,
    cuisine: tripDB.Sequelize.STRING,
    price: tripDB.Sequelize.INTEGER
};

const Restaurant = tripDB.define('restaurant', attr);

module.exports = Restaurant;