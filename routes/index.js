const models = require('../db').models;
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const findHotels = models.Hotel.findAll({
        include: [models.Place]
    });
    const findActivities = models.Activity.findAll({
        include: [models.Place]
    });
    const findRestaurants = models.Restaurant.findAll({
        include: [models.Place]
    });

    Promise.all([
            findHotels,
            findActivities,
            findRestaurants
        ])
        .then(function([hotels, activities, restaurants]) {
            res.render('index', {
                hotels,
                activities,
                restaurants,
                title: 'testing123'
            });
        })
        .catch(next);
});

router.get('/data.js', function(req, res, next) {
    const findHotels = models.Hotel.findAll({
        include: [models.Place]
    });
    const findActivities = models.Activity.findAll({
        include: [models.Place]
    });
    const findRestaurants = models.Restaurant.findAll({
        include: [models.Place]
    });

    Promise.all([
            findHotels,
            findActivities,
            findRestaurants
        ])
        .then(function([hotels, activities, restaurants]) {
            res.set('Content-Type', 'application/javascript');
            res.render('script', {
                hotels,
                activities,
                restaurants
            });
        })
        .catch(next);
});

module.exports = router;