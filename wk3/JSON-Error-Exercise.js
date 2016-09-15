(function(){
    function askForNumber(number){
        var number = prompt("Please provide a number.", "1-10");
        if ((number < 11) && (number > 0)){
            return number;
        }
        else {
            throw "not a valid number";
        }
    }

    function translateNumberToGerman(number) {
        var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var germanNumbers = ["eins", "zwie", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"];
        try {
            var numberToTranslate = askForNumber(number);
            console.log(numberToTranslate);
            var index = numberArray.indexOf(parseInt(numberToTranslate, 10));
            console.log("The index of this number is " + index);
            console.log("The number in german is " + germanNumbers[index]);
            return germanNumbers[index];
        } catch(error) {
            console.log(error);
            console.log("I'm going to keep prompting you until you behave!");
            translateNumberToGerman(number);
        }
    }

    translateNumberToGerman();

})();
