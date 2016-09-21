$(document).ready(function() {
    var templates = document.querySelectorAll('script[type="text/handlebars"]');

    Handlebars.templates = Handlebars.templates || {};
    Handlebars.partials = Handlebars.templates;

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    $.getJSON('ticker-JSON-links.json', function(links) {
        var template = Handlebars.templates.itemLinks({
            links: links
        });
        $(".container").html(template);
        console.log(template);
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
