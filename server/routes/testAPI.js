var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.get('/', function(req, res, next) {
  var distance = 100
    res.send('distance');
});

router.post('/', function(req, res) {
    console.log(req.body.posted_data)

  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington+DC&destinations=New+York+City,NY&key=AIzaSyB6H02HJghnU01WhAX5rvMOqPd5l08fdiU')
  .then(function (response) {
    var distance = response.data.rows[0].elements[0].distance.value
    console.log(distance)

  });
});

module.exports = router;
