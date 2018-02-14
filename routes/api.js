//Dependencies
var express = require('express');
var router = express.Router();

global.tweets = [
	{
		text: 'This is a tweet',
		handle: 'twitterAPI'
	}
];

//Routes
router.get('/', function(req, res){
	return res.json({
		tweets: global.tweets,
		error: false
	});
});

//Return Router
module.exports = router;