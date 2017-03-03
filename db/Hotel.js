const tripDB = require('./db');

const attr = {
    name: tripDB.Sequelize.STRING,
    num_stars: tripDB.Sequelize.INTEGER,
    amenities: tripDB.Sequelize.STRING
};
const Hotel = tripDB.define('hotel', attr);

module.exports = Hotel;