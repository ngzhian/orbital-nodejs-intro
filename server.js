var express = require('express');
var app = express();

app.get("/", function (req, res) {
	console.log("Got a request!");
	res.sendfile("index.html");
});

app.listen(8000);
console.log("Express is listening on port 8000");
