// Create web server

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var comments = [
  { "id": 0, "author": "Pete Hunt", "text": "This is one comment" },
  { "id": 1, "author": "Jordan Walke", "text": "This is *another* comment" }
];

// GET /comments
app.get('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// Start server
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example server listening at http://localhost:%s', port);
});
