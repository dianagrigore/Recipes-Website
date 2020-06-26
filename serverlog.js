// server.js

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.listen(4000);
console.log('4000 is the magic port');