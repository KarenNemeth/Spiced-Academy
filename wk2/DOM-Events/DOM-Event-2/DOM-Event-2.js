(function() {
    var textArea = document.querySelector("textarea");
    var gettysburgAddress = document.querySelector("p").innerHTML;


    textArea.addEventListener('input', replaceText);

    function replaceText() {
        var enteredText = textArea.value;
        var changed = "";
        for (var i=0; i < enteredText.length; i++){
            changed += gettysburgAddress[i];
            console.log("hi");
        }
        textArea.value = changed;
    }

})();
