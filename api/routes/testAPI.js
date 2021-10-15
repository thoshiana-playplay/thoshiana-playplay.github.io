var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Bendejo');
});

module.exports = router;