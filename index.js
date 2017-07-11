const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
contt data = require ('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('data', './data');
app.set('data engine', 'mustache');

app.use('/static', express.static('public'));
app.get('/', function (req, res) {
  res.render('user',data);
});

app.get('/user/:id', function (req, res, next) {
  let id = req.params.id;
  let user= data.users (id);
  next()
});

app.listen(3000, function () {
  console.log('listen');
});
