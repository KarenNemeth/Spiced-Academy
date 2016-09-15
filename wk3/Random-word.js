(function(){
    var wordDiv = document.getElementById("word");

    var xhr = new XMLHttpRequest;

    function getRandomWord(){
        xhr.open('GET', 'http://www.setgetgo.com/randomword/get.php?len=7');
        xhr.send();
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState != XMLHttpRequest.DONE) {
                console.log("not done");
                return;
            }
            var status;
            try {
                status = xhr.status;
                var chosenWord = xhr.responseText;
            } catch(e) {
                //handle error in some way
                console.log("error");
                return;
            }
            var chosenWord = xhr.responseText;
            wordDiv.innerHTML = chosenWord;
        });
    }

    getRandomWord();

})();
