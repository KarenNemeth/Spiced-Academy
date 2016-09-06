(function() {
    var outer = document.getElementById("outer");
    var inner = document.getElementById("inner");

    outer.addEventListener("click", changeColor);
    inner.addEventListener("click", changeColor);

    function changeColor(e) {
        var randomColor = '#' + Math.random().toString(16).slice(-6);
        this.style.backgroundColor = randomColor;
        e.stopPropagation();
    }


})();
