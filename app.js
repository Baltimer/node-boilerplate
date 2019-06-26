// Basic imports
var express = require('express');
var app = express();
var http = require('http').Server(app);
let router = express.Router();

// Resources
app.use(express.static(__dirname + '/public')); // To lad static files like <img> or <css>
app.use(express.static(__dirname + '/node_modules')); // To load libraries on <components>

router.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000, function(){
    console.log('Running on port 3000');
});