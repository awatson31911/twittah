const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');




router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', {showForm: true, tweets: tweets});
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render('index', {tweets: list});
});

router.get('/tweets/:id', (req, res) => {
  var id = +req.params.id;
  //console.log(typeof(id), id);
  var tweet = tweetBank.find( {id: id} );
  res.render('index', {tweets: tweet});
});

router.post('/tweets', (req, res) => {
  var name = req.body.name;
  var text = req.body.text;
  console.log(name, text);
  tweetBank.add(name, text);
  res.redirect('/');
})


module.exports = router;
