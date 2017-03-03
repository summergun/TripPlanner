const tripDB = require('./db');

const attrs = {
    name: tripDB.Sequelize.STRING,
    age_range: tripDB.Sequelize.STRING
};

const Activity = tripDB.define('activity', attrs);

module.exports = Activity;