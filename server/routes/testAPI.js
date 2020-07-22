var express = require('express');
var router = express.Router();
var axios = require ('axios');

router.post('/', function(req, res) {
    var journey_data_out = req.body.posted_data
    // console.log(journey_data_out)

axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {

  params: {
    origins: journey_data_out.origin,
    destinations: journey_data_out.destination,
    mode: journey_data_out.mode,
    key: 'AIzaSyDiJ3hGxadOyarSWI0NjyUbV2aVNUK3-kE'}})

  .then(function (response) {
    // console.log(response)
    var google_data_in = response.data.rows[0].elements[0]
    // console.log(distance)
    res.send({ distance: google_data_in.distance.value});
  });
});

module.exports = router;
