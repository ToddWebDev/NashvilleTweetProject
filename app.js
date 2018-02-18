
//Dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

//Express
var app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//Set Static Path for Front End
app.use(express.static(path.join(__dirname, 'public')));

//API Routes
app.use('/api', require('./routes/api'));

//Start Server
app.listen(process.env.PORT || 5000, function () {
  console.log('Twitter API Playground App listening on port 3000!');
});