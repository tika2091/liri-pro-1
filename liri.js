
///require npm packages////
var tweeter = require('tweeter');
var spotify = require('spotiry');
var  request= require('request');
var fs = require("fs");

///inserting tweeter key to keys variable///
var keys = require('./keys.js');

//////commands/////
var commandA = process.argv[2];
var commandB = process.argv[3];

console.log(commandA === commandB);


var newClient = new twitter(keys.twitterKeys);
newClient.get('stauts/user_timeline.json', {screen_name: 'userKeys', count:10}, function(error,tweets, response){ 
if(!error){
	console.log('error!!!')};
	consle.log(tweets);
});

