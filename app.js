const express = require( 'express' );
const app = express();
const tripDB = require( './db' );
const methodOverride = require( 'method-override' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const swig = require( 'swig' );

const models = tripDB.models;
//..............................................
// don't need these yet...uncomment as needed...
// const Restaurant = models.Restaurant;
// const Activity = models.Activity;
// const Hotel = models.Hotel;
// const Place = models.Place;
//..............................................

swig.setDefaults({ cache: false });
app.set( 'view engine', 'html' );
app.engine( 'html', swig.renderFile );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride( '_method' ))

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/css', express.static(path.join(__dirname, './css')));
//..............................................
//........need to setup specific routes.........
//..............................................

app.get('/', (req, res, next) => {
    res.render('index')
});

module.exports = app;
