//Exercise 1

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        var area = (width * height);
        console.log(area);
        return area;
    };
}

function Square(side) {
    this.side = side;
    Rectangle.call(this, side, side);
}

var square = new Square(4);
square.getArea();

var rect = new Rectangle(4, 5);
rect.getArea();

//Exercise 2

function invertCase(string) {
    var text = string.split("");
    for (var i = 0; i < text.length; i++) {
        if (text[i] == text[i].toUpperCase()){
            text[i] = text[i].toLowerCase();
        }
        else if (text[i] == text[i].toLowerCase()) {
            text[i] = text[i].toUpperCase();
        }
        else {
            text[i] = text[i];
        }
    }
    string = text.join("");
    console.log(string);
    return string;
}

invertCase("Hi there! My name is Karen. I really REALLY like PUPPIES!");
