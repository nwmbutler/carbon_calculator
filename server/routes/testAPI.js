var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.post('/', function(req, res) {
    console.log(req.body.posted_data)

  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json',
  {
    params: { origins: 'london', destinations: 'Glasgow', key: 'AIzaSyAdbzu2YviS02zhoNB79zqsGdyEwxFzDCw'}})
  .then(function (response) {
    console.log(response)
    var distance = response.data.rows[0].elements[0].distance.value
    console.log(distance)
    res.send({ answer:  distance});

  });
});

module.exports = router;

