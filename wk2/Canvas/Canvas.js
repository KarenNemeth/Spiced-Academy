(function(){

    var figure = document.getElementById('figure').getContext('2d');
    var canvasLarge = document.getElementById('larger').getContext('2d');
    var stickImg = document.getElementById("figure");
    //canvasLarge.drawImage(stickImg, 0, 0);

    figure.beginPath();
    figure.arc(100, 100, 50, 0, 2 * Math.PI);
    figure.moveTo(100, 150);
    figure.lineTo(100, 300);
    figure.lineTo(50, 400);
    figure.moveTo(150, 400);
    figure.lineTo(100, 300);
    figure.moveTo(175, 175);
    figure.lineTo(100, 225);
    figure.lineTo(25, 175);
    figure.moveTo(85, 80);
    figure.arc(80, 80, 5, 0, 2 * Math.PI);
    figure.moveTo(125, 80);
    figure.arc(120, 80, 5, 0, 2 * Math.PI);
    figure.moveTo(100, 95);
    figure.arc(100, 100, 5, -(2 * Math.PI)/4, (2 * Math.PI)/4);
    figure.moveTo(127, 111.5);
    figure.arc(100, 100, 30, (2 * Math.PI)/16, 7 * (2 * Math.PI)/16);
    figure.stroke();

    var x = 0;
    var y = 0;
    canvasLarge.drawImage(stickImg, x, y);

    //var canvas = document.getElementById("larger");
    document.body.addEventListener("keydown", moveIt);

    function moveIt(e){
        canvasLarge.clearRect(0, 0, 400, 600);
        switch (e.which) {
        case 37:
            console.log("you pressed left!");
            x -= 20;
            break;
        case 38:
            console.log("you pressed up!");
            y -= 20;
            break;
        case 39:
            console.log("you pressed right!");
            x += 20;
            break;

        case 40:
            console.log("you pressed down!");
            y += 20;
            break;
        }
        canvasLarge.drawImage(stickImg, x, y);
    }



}());
