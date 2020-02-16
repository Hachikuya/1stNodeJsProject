var http = require('http');
var url = require('url');
var querystring = require('querystring'); //including module

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;

    // console.log(page);
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // if (page =='/') {
    //     res.write('You\'re at the reception desk. How can I help you?');
    // }
    // else if (page =='/basement') {
    //     res.write('You\'re in the wine cellar. These bottles are mine!');
    // }
    // else if(page == '/floor/1/bedroom') {
    //     res.write('Hey, this is a private area!');
    // } else {
    //     res.writeHead(404);
    // }

    if ('firstname' in params && 'lastname' in params) {
        res.write('Your name is ' + params['firstname'] + " " + params['lastname']);
    } else {
        res.write('You do have a first name and last name, don\'t you?');
    }
    res.end(); 
});
server.listen(8080);