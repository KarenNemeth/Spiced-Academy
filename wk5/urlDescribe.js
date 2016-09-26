const url = require('url');
const querystring = require('querystring');

function describeURL(){
    var string = process.argv[2];
    var URL = url.parse(string);
    console.log("The protocol is " + URL.protocol);
    console.log("The host is " + URL.host);
    console.log("The hostname is " + URL.hostname);
    console.log("The port is " + URL.port);
    console.log("The path is " + URL.path);
    console.log("The pathname is " + URL.pathname);
    console.log("The query is " + URL.query);
    var queries = querystring.parse(URL.query);
    console.log(queries);
    for (var prop in queries){
        console.log("The value of the " + prop + " parameter is " + queries[prop]);
    }
}

describeURL();
