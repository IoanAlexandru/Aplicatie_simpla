var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next){
	res.render('about');
});

/* POST home page. */
router.post('/', function(req, res, next) {
  var firstName = req.body.fName;
  var secondName = req.body.sName;
  var quantity = req.body.qt;

  var string = "You full name is " + firstName + " " + secondName + " and you ordered a total of " + quantity + " product(s)"; 

  console.log(req.body);
  res.render('thanks', {
  	content: string
  });
});

module.exports = router;
