var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.post('/', function(req, res) {
    console.log(req.body.posted_data)

  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=london&destinations=cambridge+UK&key=AIzaSyC2wVcNoihfxKfL4skQA_kbht4AmywY__0')
  .then(function (response) {
    var distance = response.data.rows[0].elements[0].distance.value
    console.log(distance)
    res.send({ answer:  distance});

  });
});

module.exports = router;
