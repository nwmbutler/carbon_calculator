var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/', function(req, res) {
    console.log(req.body.posted_data)

  axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington+DC&destinations=New+York+City,NY&key=')
  .then(function (response) {
    console.log(response.data.rows[0].elements[0].distance.value);
  });
});

module.exports = router;
