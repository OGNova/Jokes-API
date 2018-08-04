const express = require('express');
const app = require('./app');

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + 3000);
});
