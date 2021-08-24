
var div = document.createElement('div');
div.id = "divTP2"

var p = document.createElement('p');
p.appendChild(document.createTextNode(
    "Langages basés sur ECMAScript :"
));
div.appendChild(p);

list = ["JavaScript", "JScript", "ActionScript", "EX4"];
var ul = document.createElement('ul');

list.forEach(item => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
});

// for (let i = 0; i < 4; i++) {
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(list[i]));
//     ul.appendChild(li);
// }

div.appendChild(ul);

document.body.appendChild(div);






