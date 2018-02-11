var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

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


//Run the App
app.listen(process.env.PORT || 3000, function () {
  console.log('Twitter API Playground App listening on port 3000!');
});