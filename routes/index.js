const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');




router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});


// router.get('/stylesheets.style.css', function (req, res) {
//   res.render('stylesheets/style.css');
// })


module.exports = router;
