var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 8080;

var userInput = [];
var answerArray = [];

app.listen(port, function(req, res) {
    console.log('server listening on', port);
}); // end spin up server

//base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
}); //end base url

// static folder
app.use(express.static('public'));

app.post('/sendData', urlEncodedParser, function(req,res){
  console.log('in post route');
  console.log('req.body in post = ', req.body);
  userInput.push(req.body);
  calculate();
  console.log(userInput);
}); // end app post

var calculate = function() {
  console.log('calculate function');
  var answer = '';

  // for loop to calculate
  for (var i = 0; i < userInput.length; i++) {
    if( userInput[i].type === '+') {
      answer = Number(userInput[i].x) + Number(userInput[i].y);
      console.log(answer);
    } else if( userInput[i].type === '-') {
      answer = Number(userInput[i].x) - Number(userInput[i].y);
      console.log(answer);
    } if( userInput[i].type === '*') {
      answer = Number(userInput[i].x) * Number(userInput[i].y);
      console.log(answer);
    } if( userInput[i].type === '/') {
      answer = Number(userInput[i].x) / Number(userInput[i].y);
      console.log(answer);
    } // end if statements
  } // end for loop
  answerArray.push(answer);
}; // end calculation function

app.get('/returnData', function(req, res){
  console.log('app.get');
  res.send(answerArray);
}); // end send info
