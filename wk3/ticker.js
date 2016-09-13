
(function() {

    var ticker = document.getElementsByClassName('container');
    var tickerChildren = ticker[0].children;
    var x = 100;
    var width;
    var noEvent = true;


    function roundAbout() {

        ticker[0].style.left = x+"%";
        x -= 0.17;

        width = (Math.round(((tickerChildren[0].offsetWidth/document.querySelectorAll('body')[0].clientWidth)-0)*100));

        if (x < -width){
            window.cancelAnimationFrame(roundAbout);
            x += (width+0.5);
            ticker[0].appendChild(tickerChildren[0]);
            ticker[0].style.left = x+"%";
        }

        if (noEvent) {
            window.requestAnimationFrame(roundAbout);
        }
    }

    roundAbout();

    ticker[0].addEventListener("mouseenter", function(){
        noEvent = false;
        window.cancelAnimationFrame(roundAbout);
        console.log("hovered!");
    });
    ticker[0].addEventListener("mouseleave", function(){
        noEvent = true;
        roundAbout();
        console.log("left");
    })

})();
