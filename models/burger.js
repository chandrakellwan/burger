
//this will call the ORM functions using burger specific input for the ORM.

var ORM = require('../config/orm');

var burger = {
	selectAll: function(){
		console.log('burger select');
	},

	insertOne: function(){
		console.log('burger insert');
	},

	updateOne: function(){
		console.log('burger update');
	}

}
//exxports the burger.js file.
module.exports = burger;

