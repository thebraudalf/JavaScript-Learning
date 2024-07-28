console.log("Hello Vishwa");

/// Basic Dom properties and methods
let box_1 = document.querySelector(".container");
// This method is used to read tag name of an element
console.log(box_1.tagName);

let box_2 = document.querySelector("body").lastChild;
// This method is used to read node name of an element
console.log(box_2.nodeName);

// This method is used to get the inner html's string
document.querySelector(".box").innerHTML;
// This method is used to get the inner html and his string
document.querySelector(".box").outerHTML;
// This method is used to get or change the text from an element
document.querySelector("#divA").textContent;
document.querySelector("#divA").textContent = "This box is Noice";
// This method is used to hide the html element(class = ele1)
document.querySelector(".ele1").hidden = true;

/// Attribute Methods
// This method is used to check wheather the particular attribute has in the element or not
document.querySelector(".ele2").hasAttribute("class");
// This method is used to get attribute value (If you want to get style attribute value it returns null)
document.querySelector(".ele2").getAttribute("class");
// This method is used to set attribute and give its value
document.querySelector("#element").setAttribute("class", "eleChild");
// This method is used to remove attribute 
document.querySelector("#element").removeAttribute("class", "eleChild");
// This method is used to get collection of all attributes of an html element
document.querySelector(".ele2").attributes;
// dataset method is used to access the custom data attributes.
document.querySelector(".ele1").dataset;


// A very few people know about this method it helps to change the design of the websites of all countries
document.designMode = "on";

