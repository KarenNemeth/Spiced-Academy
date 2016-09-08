(function(){
    function getClasses(findThisClass){
        var startingPoint = document.body;
        var desiredElements = [];

        function letsDoThis(something) {
            var childrenOf = something.children;
            for (var i=0; i < childrenOf.length; i++) {
                if (childrenOf[i].className === findThisClass {
                    desiredElements.push(childrenOf[i]);
                }
                else {
                    var splitClasses = childrenOf[i].className.split(" ");
                    for (var j=0; j < splitClasses.length; j++) {
                        if (splitClasses[j].className === findThisClass) {
                            desiredElements.push(splitClasses[j]);
                        }
                    }
                }
                // to check in thecondition of "catdog", etc. use toCharArray to split the classname up, then make the desired classname into an array and wait for the characters to match. if they do record if not move on.

                letsDoThis(childrenOf[i]);
            }
        }

        letsDoThis(startingPoint, desiredElements);

        console.log(desiredElements);
        return(desiredElements);
    }

    getClasses("cat");
}());
