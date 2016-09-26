var events = require('events');
var Countdown = function(n){
    var me = this;
    var interval = setInterval(function(){
        if (n >= 0) {
            me.emit("secondElapsed", n);
            n--;
        }
        else {
            clearInterval(interval);
        }
    }, 1000);
};

Countdown.prototype = new events.EventEmitter;

module.exports = Countdown;
