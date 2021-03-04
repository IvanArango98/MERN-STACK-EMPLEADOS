var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Curso Mern Stack' });
 res.send("prueba sin motor de vista");
});

module.exports = router;

