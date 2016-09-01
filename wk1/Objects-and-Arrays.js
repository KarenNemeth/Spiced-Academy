//Exercise 1
function each(obj, drinksDesired) {
    for (var i in obj) {
        drinksDesired(obj[i],i);
    }
}

var drinksObj = {
    "sparkling": "door",
    "flat": "1",
    "orangina": "2",
    "diet coke": "3",
    "lemonade": "4",
    "coke": "5"
};

var drinksArray = ["flat", "orangina", "diet coke", "lemonade", "coke", "sparkling"];

function drinksDesired(val,other) {

    console.log("I would like a " + val + ".  " + "It's on the " + other + "th shelf.");
}

each(drinksArray,drinksDesired);

//Exercise 2

function reverse(array) {
    var newArray = array.slice().reverse();
    return newArray;
}

console.log(reverse(drinksArray));

//Exercise 3

function callBack(value) {
    return value < 0;
}

function getLessThanZero(numArray) {
    var newNumArray = numArray.filter(callBack);
    console.log(newNumArray);
    return newNumArray;
}

getLessThanZero([1, 2, -1, -90, 10]);
