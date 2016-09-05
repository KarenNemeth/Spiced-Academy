(function(){
    var slideIndex = 0;


    function carousel(){
        var image = document.getElementsByClassName('cat');
        var dot = document.getElementsByClassName('dot');

        slideIndex++;
        if (slideIndex > image.length) {
            slideIndex = 1;
        }

        var current = slideIndex - 1;
        var previous = slideIndex - 2;
        if (previous < 0) {
            previous = 3;
        }
        var nowHidden = previous - 1;
        if (nowHidden < 0) {
            nowHidden = 3;
        }
        //var upNext = slideIndex;

        image[current].style.transform = "translateX(0%)";
        image[current].style.transition = "transform 1s ease-in-out";
        image[current].style.zIndex = "100";
        image[current].style.opacity = " ";

        image[previous].style.transform = "translateX(-100%)";
        image[previous].style.transition = "transform 1s ease-in-out";

        image[nowHidden].style.transform = "translateX(100%)";
        image[nowHidden].style.transition = "transform 0s";

        dot[current].style.backgroundColor = "white";
        dot[previous].style.backgroundColor = "transparent";
        setTimeout(carousel, 5000);
    }

    carousel ();

    /*function toTheLeft() {
        carousel(slideIndex--);
    }
    function toTheRight() {
        carousel(slideIndex++);
    }*/

})();
