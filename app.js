var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path for Front End
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', function (req, res) {
	res.send('Hello, World.');//Direct
});


//Run the App
app.listen(process.env.PORT || 3000, function () {
  console.log('Twitter API Playground App listening on port 3000!');
});