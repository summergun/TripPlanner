const models = require('../db').models;
const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    const findHotels = models.Hotel.findAll({
        include:[models.Place]
    });
    const findActivities = models.Activity.findAll({
         include:[models.Place]
     });
    const findRestaurants = models.Restaurant.findAll({
        include:[models.Place]
    });

Promise.all([
    findHotels,
    findActivities,
    findRestaurants
])
.then(function([hotels,activities,restuarants]){
    res.render('index',{
        hotels,
        activities,
        restuarants
    });
})
.catch(next);
});

module.exports=router;



