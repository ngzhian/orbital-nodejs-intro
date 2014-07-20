var express = require('express');
var app = express();

var messages = [];

app.get("/", function (req, res) {
	console.log("Got a request!");
	res.sendfile("index.html");
});

app.post("/message", function (req, res) {
	console.log("Received message!");
	res.end();
});

app.listen(8000);
console.log("Express is listening on port 8000");
