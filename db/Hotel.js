const tripDB = require( './db' );

const Hotel = tripDB.define('hotel', {
    name: tripDB.Sequelize.STRING,
    num_stars: tripDB.Sequelize.INTEGER,
    amenities: tripDB.Sequelize.STRING
});

module.exports = Hotel;
