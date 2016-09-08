(function(){
    function getClasses(findThisClass){
        var startingPoint = document.body;
        var desiredElements = [];

        function letsDoThis(something, theArray) {
            var childrenOf = something.children;
            for (var i=0; i < childrenOf.length; i++) {
                if (childrenOf[i].className === findThisClass) {
                    theArray.push(childrenOf[i]);
                }
                letsDoThis(childrenOf[i], desiredElements);
            }
        }

        letsDoThis(startingPoint, desiredElements);

        console.log(desiredElements);
    }

    getClasses("cat");
}());
