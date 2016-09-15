(function(){
    var textArea = document.getElementById("textArea");
    var button = document.getElementById("button");
    var message = document.getElementById("message");
    var possibleJSON;

    button.addEventListener("click", validateJSON);

    function validateJSON(){
        possibleJSON = textArea.value;
        try {
            JSON.parse(possibleJSON);
            message.innerHTML = "You entered valid JSON data!";
        } catch (e) {
            message.innerHTML = "Oops, looks like this isn't valid JSON.";
        }
    }


})();
