var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  //res.render('user page', userCtrl.index)

  ///index ctrl: go into your database, find it by (id), and pasa that user info to the index page
});



module.exports = router;
