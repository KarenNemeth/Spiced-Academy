(function(){
    var slideIndex = 0;
    var image = document.getElementsByClassName('cat');
    var images = document.getElementById("carousel");
    var dot = document.getElementsByClassName('dot');
    var current;
    var previous;
    var contextual;
    var setTime;
    var transitioning = false;
    var fuckingFuck = 0;

    function carousel(){

        if (slideIndex >= image.length) {
            slideIndex = 0;
        }

        current = slideIndex;
        previous = (current - 1);
        if (previous < 0) {
            previous = 3;
        }

        image[current].style.opacity = "1";
        image[current].id = "current";
        if (fuckingFuck != 0) {
            transitioning = true;
        }
        if (image[previous].id !== "ready") {
            image[previous].id = "previous";
            images.addEventListener("transitionend",
                function() {
                    image[previous].id = "ready";
                    transitioning = false;
                });
        }

        dot[current].style.backgroundColor = "white";
        dot[previous].style.backgroundColor = "transparent";
        setTime = setTimeout(carousel, 5000);

        slideIndex++;
        fuckingFuck++;
    }

    carousel();

    var dotArray = Array.prototype.slice.call(dot,0);
    var dots = document.getElementById("dots");
    dots.addEventListener("click", buttonClick);

    function buttonClick(e) {
        if ((e.target !== e.currentTarget) && (transitioning === false)) {
            console.log("Meow! I'm on my way.");
            var dotIndex = dotArray.indexOf(e.target);
            contextual = current;
            for (var w=0; w < image.length; w++){
                image[w].id = "ready";
                dot[w].style.backgroundColor = "transparent";
            }
            image[contextual].id = "previous";
            dot[contextual].style.backgroundColor = "transparent";
            clearTimeout(setTime);
            slideIndex = dotIndex;
            carousel();
        }
        else if (transitioning) {
            alert("Stop bothering me human!");
        }
    }

})();
