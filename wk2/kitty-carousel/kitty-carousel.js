(function(){
    var slideIndex = 0;
    var image = document.getElementsByClassName('cat');
    var images = document.getElementById("carousel");
    var dot = document.getElementsByClassName('dot');
    var current;
    var previous;
    var contextual;
    var contextualPrevious;
    var setTime;

    function carousel(){

        if (slideIndex >= image.length) {
            slideIndex = 0;
        }

        current = slideIndex;
        previous = (current - 1);
        if (previous < 0) {
            previous = 3;
        }
        /*var nowHidden = previous - 1;
        if (nowHidden < 0) {
            nowHidden = 3;
        }
        var upNext = slideIndex + 1;
        if (upNext > 3) {
            upNext = 0;
        }*/

        image[current].style.opacity = "1";
        image[current].id = "current";
        if (image[previous].id !== "ready") {
            image[previous].id = "previous";
            images.addEventListener("transitionend",
                function() {
                    image[previous].id = "ready";
                });
        }

        dot[current].style.backgroundColor = "white";
        dot[previous].style.backgroundColor = "transparent";
        setTime = setTimeout(carousel, 2000);

        slideIndex++;
        console.log("current slide is:" + current);
        console.log("previous slide is:" + previous);
    }

    carousel();

    var dotArray = Array.prototype.slice.call(dot,0);
    var imageArray = Array.prototype.slice.call(image,0);
    var dots = document.getElementById("dots");
    dots.addEventListener("click", buttonClick);

    function buttonClick(e) {
        if (e.target !== e.currentTarget) {
            var dotIndex = dotArray.indexOf(e.target);
            contextual = current;
            contextualPrevious = current-1;
            if (contextualPrevious < 0) {
                contextualPrevious = 3;
            }
            clearTimeout(setTime);
            // console.log(contextual);
            // console.log(contextualPrevious);
            slideIndex = dotIndex;

            if (dotIndex === contextualPrevious) {
                images.addEventListener("transitionend", pictureLoading);
                    function pictureLoading(e) {
                        console.log(contextualPrevious + " has finished propogating");
                        image[contextualPrevious].id = "ready";
                        if (image[contextualPrevious].id === "ready") {
                            console.log("what the fuck");
                        }
                        images.removeEventListener("transitionend", pictureLoading);
                        carousel();
                    }
                // console.log("this is previous. it is index number " + contextualPrevious);
                // image[contextual].addEventListener("transitionend", moveAlongQuick);
                //     function moveAlongQuick() {
                //         image[contextualPrevious].id = "ready";
                //         console.log("notanother");
                //         image[contextual].removeEventListener("transitionend", moveAlongQuick);
                //     }
                    //I want to wait until contextualPrevious has finished moving off screen completely, the immediate move it to "ready", then call carousel which will set it to current and back to the main position.
            }
            else if (image[dotIndex] !== image[contextual]) {
                console.log("you pressed button number " + dotIndex + " it is a hidden button");
                for (var w=0; w<image.length; w++){
                    image[w].id = "ready";
                    dot[w].style.backgroundColor = "transparent";
                }
                image[contextual].id = "previous";
                dot[contextual].style.backgroundColor = "transparent";
                function ready(){
                    console.log(contextual + "finished");
                    image[contextual].id = "ready";
                    images.removeEventListener("transitionend", ready);
                }
                images.addEventListener("transitionend", ready);
                e.stopPropogation;
                //slideIndex = dotIndex;
                carousel();
                //works as long as you dont click on one that's currently moving off screen or click on ones too fast. need a condition outside these if else statements that notices +2 events in a 2 second period, makes an alert not affecting carousel at all
            }
            else {
                console.log("this is current, nothing much to do!");
                //slideIndex = dotIndex;
                carousel();
            }

            // slideIndex = dotIndex;
            // carousel();
        }
        e.stopPropogation;
    }

})();


/*else if(image[dotIndex] === image[previous]) {
    console.log("previous clicked");
}
else {

    image[i].id = "ready";
    dot[i].style.backgroundColor = "transparent";
}*/
    //else {
        //image[i].id = "current";
        /*image[current].addEventListener("transitionend",
            function() {
                image[previous].id = "ready";
            });*/
        //console.log("tryingagain");
    //}
