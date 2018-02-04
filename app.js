const express = require('express');
const app = express();
const path    = require("path");

app.use(express.static(__dirname + '/views'));

app.get('/', function home(req, res) {
  res.sendFile('/home.html');
});

app.get('/about', function home(req, res) {
  res.sendFile('/about.html');
});

app.get('/contact', function home(req, res) {
  res.sendFile('/contact.html');
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));
