const tripDB = require( './db' );

const Activity = tripDB.define('activity', {
    name: tripDB.Sequelize.STRING,
    age_range: tripDB.Sequelize.STRING
});

module.exports = Activity;
