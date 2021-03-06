//Exercise 1

function Exercise1() {
    var beautifyWiki = document.querySelectorAll('p');
    for (var i=0; i<beautifyWiki.length; i++) {
        var individualPs = beautifyWiki[i];
        individualPs.style.fontStyle = 'italic';
        individualPs.style.fontWeight = 'bold';
        individualPs.style.textDecoration = 'underline';
    }
}

Exercise1();


//Exercise 2, use on a wikipedia article to work properly

function Exercise2() {
    var headlines = document.querySelectorAll(".mw-headline");
    var headlinesArray = Array.prototype.slice.call(headlines,0);

    console.log(headlinesArray);
    Array.isArray(headlinesArray);
}

Exercise2();

//Exercise 3

//creation

//document.body.innerHTML = ''; //to run on any page

function Exercise3() {
    var unknown = document.createElement("P");
    var text = document.createTextNode("AWESOME");

    unknown.appendChild(text);
    document.body.appendChild(unknown);

    ///styling

    unknown.style.position = "fixed";
    unknown.style.zIndex = "2147483647";
    unknown.style.left = "20px";
    unknown.style.top = "100px";
    unknown.style.fontSize = "200px";
}

Exercise3();
