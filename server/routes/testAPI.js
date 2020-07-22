var express = require('express');
var router = express.Router();
var axios = require ('axios');



router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/', function(req, res) {
    console.log(req.body.posted_data)

  axios.get()
  .then(function (response) {
    console.log(response.data.distance);
  });
});

module.exports = router;
