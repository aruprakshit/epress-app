const express = require('express');
const app = express();
const path    = require("path");

app.use(express.static('assets'));

app.get('/', function home(req, res) {
  res.sendFile('home.html', {root: 'views'});
});

app.get('/about', function home(req, res) {
  res.sendFile('about.html', {root: 'views'});
});

app.get('/contact', function home(req, res) {
  res.sendFile('contact.html', {root: 'views'});
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));
