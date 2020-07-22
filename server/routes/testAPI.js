var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.post('/', function(req, res) {
    var testing = req.body.posted_data
    console.log(testing)

  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json',
  {
    params: { origins: testing.origin, destinations: testing.destination, mode: testing.mode, key: ''}})
  .then(function (response) {
    console.log(response)
    var distance = response.data.rows[0].elements[0].distance.value
    console.log(distance)
    res.send({ answer:  distance});

  });
});

module.exports = router;