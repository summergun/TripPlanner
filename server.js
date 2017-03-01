const express = require( 'express' );
const server = express();
const tripDB = require( './db' );
const methodOverride = require( 'method-override' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const swig = require( 'swig' );

swig.setDefaults({ cache: false });
server.set( 'view engine', 'html' );
server.engine( 'html', swig.renderFile );

server.use(bodyParser.urlencoded({ extended: false }));
server.use(methodOverride( '_method' ))

server.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
server.use('/css', express.static(path.join(__dirname, './css')));

server.get('/', (req, res, next) => {
    res.render('index')
});

tripDB.seed()
    .then(() => console.log('your data is seeded'))
    .catch( err => console.log(err));

console.log('Models: ', tripDB.models);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`listening on port ${port}`));
