const tripDB = require('./db');

const attr = {
    address: tripDB.Sequelize.STRING,
    city: tripDB.Sequelize.STRING,
    state: tripDB.Sequelize.STRING,
    phone: tripDB.Sequelize.STRING,
    location: tripDB.Sequelize.ARRAY(tripDB.Sequelize.FLOAT)
};

const Place = tripDB.define('place', attr);

module.exports = Place;