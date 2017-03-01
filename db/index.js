const tripDB = require( './db' )
const Restaurant = require( './Restaurant' );
const Activity = require( './Activity' );
const Hotel = require( './Hotel' );
const Place = require( './Place' );

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

const sync = () => {
    return tripDB.sync({ force: true });
};

const seed = () => {
    return sync()
        .then(() => {
            return Promise.all([
                Place.create({address: 'Times Sq', city: 'New York', state: 'NY', phone: '212-428-2200', location: [40.758896, -73.985130]}),
                Place.create({address: 'Empire State Bldg', city: 'New York', state: 'NY', phone: '212-TA4-3300', location: [40.748817, -73.985428]}),
                Place.create({address: 'Central Park', city: 'New York', state: 'NY', phone: '212-YO3-4400', location: [40.785091, -73.968285]}),
                Place.create({address: '5 Hanover Sq.', city: 'New York', state: 'NY', phone: '212-SK8-5500', location: [40.705076, -74.00916]}),
            ])
        })
};

module.exports = {
    models: {
        Activity,
        Hotel,
        Place,
        Restaurant
    },
    seed,
    sync
};
