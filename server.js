var http = require('http'); //pastrez intr-un fisier datele introduse in formular si afisez o noua pagina cu datele introduse
var url = require('url');
var fs= require('fs');
var server = http.createServer(function (req, res)
{
    var url_parts=url.parse(req.url,true);
    if(url_parts.pathname =='/cale'){
        var query=url_parts.query;
        fs.appendFileSync('date.txt', query.name + ',' + query.prenume + ',' + query.age + ',' + query.telefon+ ',' + query.email + ','+ query.role + '\n');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(query.prenume + ' are ' + query.age + ' ani si poate fi contactat la ' + query.telefon + ' ' + query.email);}
}).listen(7000);