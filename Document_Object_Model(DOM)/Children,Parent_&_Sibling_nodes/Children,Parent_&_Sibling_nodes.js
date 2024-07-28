console.log("Hello Vishwa");

// This property is used to get body nodes
var docs = document.body.childNodes;
console.log(docs);
// Here using this property for getting element through indexing
console.log(document.body.childNodes[1]);
// Use this for getting elements of 1st index element
console.log(document.body.childNodes[1].childNodes);

// Use this for getting first child
// var docs1 = document.body.firstChild;

// Use this for getting elements of a child rather than whole body
console.log(document.body.firstElementChild);
// Use this for getting children of firstElementChild
console.log(document.body.firstElementChild.children);

let cont = document.body.childNodes[1];
// Using firstElementChild property to get container property and adding inline css in this
console.log(cont.firstElementChild.style.backgroundColor = "green");
console.log(cont.firstElementChild.nextElementSibling);

let table = document.body.childNodes[3];
console.log(table);
console.log(table.cells);
// There are many properties in of nodes, childern and sibling
// It always shows null value
alert(document.documentElement.parentElement);