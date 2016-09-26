var Countdown = require("./countdown");

new Countdown(10).on("secondElapsed", function(n, interval){
    if (n != 0) {
        console.log(n + "!");
    }
    else {
        console.log("Lift off!");
    }
});
