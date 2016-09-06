(function() {
    var box = document.getElementById("box");
    box.addEventListener("mousedown", changeBackgroundColor, false);
    box.addEventListener("mouseup", changeBackgroundColor, false);

    function changeBackgroundColor() {
        var randomColor = '#' + Math.random().toString(16).slice(-6);
        box.style.backgroundColor = randomColor;
    }
})();
