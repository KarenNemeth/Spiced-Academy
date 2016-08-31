//Exercise 1 & 2

function addNumbers(){
    var sum = 0;
    for (var x = 0; x < arguments.length; x++) {
        sum += arguments[x];
    }
    return sum;
}

setTimeout(function() {console.log(addNumbers(5,10,15,100,200));}, 1500);

//Exercise 3

function exerciseThree(n) {
    if ((n <= 0) || (typeof n !== 'number')) {
        return 'ERROR';
    }
    else if (n >= 1000000) {
        return n;
    }
    else {
        var newN = (n * 10);
        return exerciseThree(newN);
    }
}

var practice = exerciseThree(50);
console.log(practice);
