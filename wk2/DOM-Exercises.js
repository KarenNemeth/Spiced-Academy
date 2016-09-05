//Exercise 1

var beautifyWiki = document.getElementsByTagName('p');
for (var i=0; i<beautifyWiki.length; i++) {
    var individualPs = beautifyWiki[i];
    individualPs.style.fontStyle = 'italic';
    individualPs.style.fontWeight = 'bold';
    individualPs.style.textDecoration = 'underline';
}



//Exercise 2, use on a wikipedia article to work properly

var headlines = document.querySelectorAll(".mw-headline");

console.log(headlines);


//Exercise 3

//creation

document.body.innerHTML = ''; //to run on any page
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
