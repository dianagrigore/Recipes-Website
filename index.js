var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', function(req, rep){
    rep.sendFile(__dirname + '/index.html');
})

app.get('/login', function(req,rep){
    rep.sendFile(__dirname + '/login.html');
})

var utilizatori = {
    1 : 'Diana',
    2 : 'Maria',
    3 : 'Ion'
}

app.get('/utilizatori/:id', function(req, rep){
    rep.render('utilizatori', {name : utilizatori[req.params.id], id : req.params.id});
})

app.listen(3000, function(){
    console.log('merge pe portul 3000');
})