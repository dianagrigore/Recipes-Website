let express = require('express')
let bodyParser = require('body-parser');
let formidable = require('formidable');
let session = require('express-session');
let crypto = require('crypto');
let app = express();
let port = 3000;
var http = require('http'); //pastrez intr-un fisier datele introduse in formular si afisez o noua pagina cu datele introduse
var url = require('url');
var fs= require('fs');
var user = '0';


app.post('/login', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

        //user= verifica(fields.username, fields.parola);//verificarea datelor de login
        if (fields.username === 'f')
            if(fields.parola === 'f')
                user = 'f';
    });
    if(user){
        req.session.username = user;//setez userul ca proprietate a sesiunii
        res.redirect('/logat');}
    else
        req.session.username=false;
});
app.get('/logat', function(req, res) {
    res.render('/logout',{'nume': req.session.username});
});

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}/`);
});
