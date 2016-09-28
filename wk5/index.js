var chalk = require('chalk');
var http = require('http');
var querystring = require('querystring');
var error = chalk.bold.magenta;

http.createServer(function(request,response){
    //Error Handlers
    var body = [];
    request.on('error', function(err){
        console.error(error("Request error:" + err));
    }).on('data', function(chunk){
        body.push(chunk);
    }).on('end', function(){
        body = Buffer.concat(body).toString();
        response.on('error', function(err){
            console.error(error("Response error:" + err));
        });

        var method = request.method;
        if (method == "GET"){
            response.setHeader('Content-Type', 'text/html');
            response.end('<!doctype html>\n<html>\n<title>Colors</title>\n<form method="POST">\n<input type="text" name="text">\n<select name="color">\n<option value="red">red</option>\n<option value="blue">blue</option>\n<option value="green">green</option>\n<option value="yellow">yellow</option>\n<option value="gray">gray</option>\n<option value="magenta">magenta</option>\n<option value="cyan">cyan</option>\n</select>\n<button type="submit">Go</button>\n</form>\n</html>');
        } else if (method == "POST"){
            var userInput = querystring.parse(body);
            var color = userInput.color;
            var text = userInput.text;
            if (!text){
                console.log("empty");
                response.setHeader('Content-Type', 'text/html');
                response.end('<!doctype html><html><a href="/" style="color:' + color + '">Try Again By Actually Giving Me A Value</a></html>');
            }
            else {
                console.log(chalk[color](text));
                response.setHeader('Content-Type', 'text/html');
                response.end('<!doctype html>\n<html>\n<title>' + text + '</title>\n<a href="/" style="color:' + color + '">' + text + '</a>\n</html>');
            }
        }
    });
}).listen(8000, console.log("I'm listening on port 8000!"));
