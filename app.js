var dotenv = require('dotenv').config();

//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Twitter = require('twitter');

//Express
var app = express();

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_key_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path for Front End
app.use(express.static(path.join(__dirname, 'public')));

//API Routes
app.use('/api', require('./routes/api'));



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
    // do stuff here later!
  } else {
    console.log(response);
	}
});

//Start Server
app.listen(process.env.PORT || 5000, function () {
  console.log('Twitter API Playground App listening on port 3000!');
});