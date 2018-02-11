var dotenv = require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Twitter = require('twitter');
//var config = require('./config');

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
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Set Static Path for Front End
app.use(express.static(path.join(__dirname, 'public')));

//Routes

app.get('/', function (req, res) {
	res.render('index', {
		id: 'an-item-id',
		name: 'an-item-name'
	});
});

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
  }
});



//Run the App
app.listen(process.env.PORT || 3000, function () {
  console.log('Twitter API Playground App listening on port 3000!');
});