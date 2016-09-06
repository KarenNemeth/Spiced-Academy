(function() {
    var body = document.body;
    var box = document.getElementById("box");
    var mouseX = 0;
    var mouseY = 0;

    body.addEventListener("mousemove", setBoxPosition, false);

    function setBoxPosition(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    function squareMove() {
        box.style.left = mouseX-50;
        box.style.top = mouseY-50;

        requestAnimationFrame(squareMove);
    }

    squareMove();
})();
