const tripDB = require( './db' );

const Place = tripDB.define('place', {
    address: tripDB.Sequelize.STRING,
    city: tripDB.Sequelize.STRING,
    state: tripDB.Sequelize.STRING,
    phone: tripDB.Sequelize.STRING,
    location: tripDB.Sequelize.ARRAY(tripDB.Sequelize.FLOAT)
});

module.exports = Place;
