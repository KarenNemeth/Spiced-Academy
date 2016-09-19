
$(document).ready(function() {

    $.getJSON('ticker-JSON-links.json', function(links) {
        console.log(links);
        $.each(links, function(key, val){
            console.log(val.title);
            console.log(val.link);
            $('<a href="' + val.link + '">' + val.title +'</a>').addClass("link").appendTo('.container');
        });
    });

    var x = 100;
    var width;
    var noEvent = true;


    function roundAbout() {

        $('.container').css({
            left: x+"%"
        });
        x -= 0.17;

        width = (Math.round((($('a').first().outerWidth()/$('body').innerWidth())-0)*100));

        if (x < -width){
            window.cancelAnimationFrame(roundAbout);
            x += (width);
            $('a').first().appendTo('.container');
            $('.container').css({
                left: x+"%"
            });
        }

        if (noEvent) {
            window.requestAnimationFrame(roundAbout);
        }
    }

    roundAbout();

    $('.container').on('mouseenter', function(){
        noEvent = false;
        window.cancelAnimationFrame(roundAbout);
        console.log("hovered!");
    }).on('mouseleave', function(){
        noEvent = true;
        roundAbout();
        console.log("left");
    });
});
