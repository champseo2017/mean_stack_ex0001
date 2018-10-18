var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    var obj_01 = ['ggwp']

    res.render('index', { strHeader: obj_01 });

});

module.exports = router;