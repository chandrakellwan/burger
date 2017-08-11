//import Express
//import burger.js

var express = require('express');
var burger = require('../models/burger');

//creates the router for the app
var router = express.Router();

router.get('/', function(){
	burger.selectAll();
});

router.post('/', function(){
	burger.insertOne();
});

router.put('/', function(){
	burger.updateOne();
});
//exports the router 
module.exports = router;