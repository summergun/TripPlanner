const tripDB = require( './db' )
const Restaurant = require( './Restaurant' );
const Activity = require( './Activity' );
const Hotel = require( './Hotel' );
const Place = require( './Place' );



const sync = () => {
    return tripDB.sync({ force: true });
};

const seed = () => {
    return sync()
};

module.exports = {
    models: {
        Activity,
        Associations,
        Hotel,
        Place,
        Restaurant
    },
    seed,
    sync
};
