var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/', function(req, res) {
    console.log(req.body.posted_data.mode)
});

module.exports = router;
