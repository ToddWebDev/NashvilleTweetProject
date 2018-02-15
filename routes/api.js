var dotenv = require('dotenv').config();

//Dependencies
var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

global.tweets = [];

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_key_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//Routes
router.get('/', function(req, res){
	return res.json({
		tweets: global.tweets,
		error: false
	});
});

//Return Router
module.exports = router;

//Twitter API Reference Index https://developer.twitter.com/en/docs/api-reference-index
client.get('search/tweets', {
	q: 'nashville', 
	count: 5,
	geocode: '36.174465,-86.767960,10mi', 
	result_type: 'recent', 
	lang: 'en'
}, function(error, response) {
  if (!error) {
    console.log(response);
		global.tweets = response;
    // do stuff here later!
  } else {
    console.log(response);
	}
});