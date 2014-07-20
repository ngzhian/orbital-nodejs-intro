var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());

var messages = [];

app.get("/", function (req, res) {
	console.log("Got a request!");
	res.sendfile("index.html");
});

app.get("/messages", function (req, res) {
	console.log("Got request for all messages");
});

app.post("/message", function (req, res) {
	var text = req.body.msgText;
	console.log("Received message: " + text);
	messages.push(text);
	res.end();
});

app.listen(8000);
console.log("Express is listening on port 8000");
