const http = require('http');
const chalk = require('chalk');
var error = chalk.bold.red;
var property = chalk.blue;

http.createServer(function(request, response){
    //Requests
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    console.log(property("Header:") + headers);
    console.log(property("Method:") + method);
    console.log(property("URL:") + url);

    var body = [];
    request.on('error', function(err){
        console.error(error("request error:" + err));
    }).on('data',function(chunk){
        body.push(chunk);
    }).on('end',function(){
        body = Buffer.concat(body).toString();
    });

    //Responses
    response.on('error', function(err){
        console.error(error("response error:" + err));
    });

    if (method == "HEAD") {
        response.setHeader('Content-Type', 'text/html');
        response.end();
    } else if (method == "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.end("<!doctype html><html><title>Hello World!</title><p>I am Node!</p></html>");
    } else if (method == "POST") {
        console.log(property("Request Body:" + body));
        response.writeHead(302, {
            'Location': '/'
        });
        response.end();
    } else {
        response.statusCode = 403;
        response.end();
    }

    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'application/json');
    //
    // var responseBody = {
    //     headers: headers,
    //     method: method,
    //     url: url,
    //     body: body
    // };
    //
    // response.write(JSON.stringify(responseBody));
    // response.end();

}).listen(8080);
