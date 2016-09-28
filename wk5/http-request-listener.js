const http = require('http');
const fs = require("fs");
const chalk = require('chalk');
var error = chalk.bold.magenta;
var property = chalk.cyan;

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
        console.log(chalk.blue("Request Body:" + body));
        response.writeHead(302, {
            'Location': '/'
        });
        response.end();
    } else {
        response.statusCode = 403;
        response.end();
    }

    //Log
    var logInformation = {
        "Timestamp": Date(),
        "Request Method": method,
        "Request URL": url,
        "User-Agent Request Header": headers
    };
    var logInfoString = JSON.stringify(logInformation, null, 4);
    fs.appendFile('requests.txt', logInfoString, (err) => {
        if (err) console.error(error("Writing File Error: " + err));
        console.log("Log entry created");
    });



}).listen(8080);
