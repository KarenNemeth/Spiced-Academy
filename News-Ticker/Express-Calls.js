const https = require('https');
const twitter = require('./twitter');
const express = require('express');
const app = express();
const hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
const chalk = require('chalk');
var error = chalk.bold.magenta;

app.use(express.static(__dirname));
app.get('/', function(reqg, resg){
    const req1 = https.request(twitter.tokenOptions, function(res) {
        res.on('data', function(data) {
            twitter.getBearerToken(data).then(function(){
                twitter.getTweets(resg);
            }).catch(function(err){
                throw error(err);
            });
        });
    }).on('error', function(err){
        console.log(error("Error " + err + " when retrieving data from twitter api"));
    });
    req1.write("grant_type=client_credentials");
    req1.end();
});
app.listen(8000, function(){
    console.log("I'm listening!");
});
