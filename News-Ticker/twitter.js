const https = require('https');
const twitterCredentials = require('./credentials.json');
const key = twitterCredentials.key;
const secret = twitterCredentials.secret;
const code = key.concat(":", secret);
const code64 = new Buffer(code).toString('base64');
const chalk = require('chalk');
var error = chalk.bold.magenta;
var note = chalk.green;
var token;

const tokenOptions = {
    host: "api.twitter.com",
    path: "/oauth2/token",
    method: "POST",
    headers: {
        Authorization: "Basic " + code64,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Length": 29
    }
};

function getBearerToken(data){
    return new Promise(function (resolve, reject){
        var tokenType;
        var tokenData;
        //Analyse bearer token
        try {
            tokenData = JSON.parse(data);
        } catch(err){
            console.log(error("Error when parsing Bearer Token: " + err));
        }
        tokenType = tokenData["token_type"];
        token = tokenData["access_token"];
        //Check validity
        if (tokenType != "bearer") {
            reject("Bearer Token No Longer Valid");
        } else{
            console.log(note("Valid Bearer token"));
            console.log(token);
            resolve(token);
        }
    });
}
function getTweets(resg){
    console.log(note("Valid Bearer Token Received"));
    var sources = ["TheEconomist", "TechCrunch", "el_pais"];
    var callsToTwitter = [];
    for (var i=0; i<sources.length; i++){
        callsToTwitter.push(callForTweets(sources[i]));
    }
    Promise.all(callsToTwitter).then(function(tweetsToDisplay){
        console.log("Done");
        var concatTweets = [].concat.apply([],tweetsToDisplay);
        concatTweets.sort(function(a,b){
            var c = new Date(a.createdDate);
            var d = new Date(b.createdDate);
            return c-d;
        });
        resg.render('ticker', {
            "links": concatTweets
        });
    }).catch(function(err){
        console.log(error(err));
    });
}
function callForTweets(username){
    return new Promise(function(resolve, reject){
        var timelineOptions = {
            host: "api.twitter.com",
            path: "/1.1/statuses/user_timeline.json?count=10&screen_name="+username,
            method: "GET",
            headers: {
                Authorization: "Bearer " + token
            }
        };
        var subreq = https.request(timelineOptions, function(res){
            var timeline = "";
            var compiledEntries = [];
            res.on('data', function(chunk){
                timeline += chunk;
            }).on('end', function(){
                var tweetsToDisplay = [];
                try {timeline = JSON.parse(timeline);}
                catch (err){reject(error("Error " + err + " parsing tweets from " + username));}
                timeline.forEach(function(entry){
                    var compilingEntry = compileFeed(entry).then(function(tweet){
                        tweetsToDisplay.push(tweet);
                    }).catch(function(){return;});
                    compiledEntries.push(compilingEntry);
                });
                Promise.all(compiledEntries).then(function(){
                    resolve(tweetsToDisplay);
                }).catch(function(err){
                    reject(error("Error " + err + " compiling tweets from " + username));
                });
            });
        });
        subreq.on('error', function(err){
            reject(error("Error " + err + " retrieving tweets from " + username));
        });
        subreq.end();
    }).catch(function (err){
        console.log(err);
    });
}

function compileFeed(entry) {
    return new Promise(function(resolve, reject){
        var text = entry.text;
        var urls = entry.entities.urls[0];
        if (urls == undefined) {
            reject();
        }
        var tweet = {};
        //Define the text to display
        var position = text.search("http");
        if (position != -1) {
            position --;
            text = text.substr(0,position);
        }
        tweet["name"] = entry.user.name;
        tweet["title"] = text;
        //Define the href
        var url = urls.expanded_url;
        tweet["link"] = url;
        //Define Date
        var createdAt = entry.created_at;
        tweet["createdDate"] = createdAt;
        resolve(tweet);
    });
}

module.exports = {
    "tokenOptions": tokenOptions,
    "getBearerToken": getBearerToken,
    "getTweets": getTweets
};
