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
                Place.create({address: '5 Hanover Sq.', city: 'New York', state: 'NY', phone: '212-SK8-5500', location: [40.705076, -74.00916]})
                ])
        })
        .then(() => {
            return Promise.all([
                Hotel.create({name: 'Times Inn', num_stars: 5, amenities: 'room safe, maid', placeId: 1}),
                Hotel.create({name: 'King Korner', num_stars: 3, amenities: 'security, petting zoo', placeId: 2}),
                Hotel.create({name: 'Grass is Greener Tents', num_stars: 4, amenities: 'porta pottie', placeId: 3})
            ])
        })
        .then(() => {
            return Promise.all([
                Restaurant.create({name: 'Heaven Can Wait Cafe', price: 5, cuisine: 'American, Liquor', placeId: 4}),
                Restaurant.create({name: 'King Burgers', price: 3, cuisine: 'Burgers, BYO', placeId: 2}),
                Restaurant.create({name: 'Grass is Greener Diner', price: 4, cuisine: 'Vegetarian, draft beers', placeId: 3})
            ])
        })
        .then(() => {
            return Promise.all([
                Activity.create({name: 'tour', age_range: 'all ages', placeId: 1}),
                Activity.create({name: 'place hopping', age_range: 'over 18', placeId: 4})
            ])
        })
}

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
