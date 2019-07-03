// Basic imports
var express = require('express');
var app = express();
var http = require('http').Server(app);
let router = express.Router();
require('./server/database'); // Initializes the database

// Resources
app.use(express.static(__dirname + '/public')); // To lad static files like <img> or <css>
app.use(express.static(__dirname + '/node_modules')); // To load libraries on <components>

// Middleware
let errorCodes = [
    404, // Not found
];

router.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

router.get('/test', function(req, res){
    let mongoose = require('mongoose');
    let Example = require('./server/models/example.js');
    
    let exampleModel = new Example({
        example: "test 1"
    });
    exampleModel.save()
        .then(doc => {
            res.send({
                success: true,
                res: doc
            });
        })
        .catch(err => {
            res.send({
                success: false,
                message: err
            });
        });
});

router.get('/examples', async function(req, res){
    let Example = require('./server/models/example.js');
    let examples = null;
    await Example.find().then(result => {
        examples = result;
    });
    res.send({examples:examples});
});
app.use(router);

app.use(function(req, res, next){ //  Handle 404
    res.status(404);
    console.log(res.statusCode);
    if(errorCodes.includes(res.statusCode)){
        res.sendFile(__dirname + '/client/40x.html');
    }
    next();
});

app.listen(3000, function(){
    console.log('Running on port 3000');
});