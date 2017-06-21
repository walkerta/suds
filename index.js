const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
contt data = require ('./data.js');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('data', './data')
app.set('data engine', 'mustache')

app.use('/static', express.static('public'))
//Listening on root
app.get('/data/', function (req, res) {
  res.render("item1:",

  }
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
