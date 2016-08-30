//First Exercise

var logType = function (a) {
    if (typeof a === 'number') {
        console.log('number!');
    }
    else {
        console.log('not a number!' + '' + 'it is...');
        if (typeof a === 'undefined') {
            console.log('undefined!');
        }
        else if ((a === null) === true) {
            console.log('null!');
        }
        else if (typeof a === (true || false)) {
            console.log('boolean!');
        }
        else if (typeof a === 'string') {
            console.log('string!');
        }
        else if (typeof a === 'function') {
            console.log('function!');
        }
        else if (typeof a === 'object') {
            console.log('object!');
            if (Array.isArray(a) === true){
                console.log(" actually, it's an array!");
            }
        }
        else {
            console.log('I have no idea!');
        }

    }

};

logType(5);

//Second Exercise

var original = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var revised = [];

for (var x in original) {
    revised[original[x]] = x;
}

console.log(revised);

//Third Exercise

for (var i = 10; i >= 1; i = i - 1){
    console.log(i);
}
