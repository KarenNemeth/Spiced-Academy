
(function() {

    var ticker = document.getElementsByClassName('container');
    var tickerChildren = ticker[0].children;
    var links = document.getElementsByClassName('link');
    var x = 88;


    function roundAbout() {

        for (var i = 0; i < links.length; i++) {
            links[i].style.left = x+"%";
            x -= 0.05;
        }
        if (x<-30){
            window.cancelAnimationFrame(roundAbout);
            ticker[0].appendChild(tickerChildren[0]);
            x = 88;
            console.log("in the loop");
        }
        window.requestAnimationFrame(roundAbout);
    }

    roundAbout();


})();
