console.log("Hello Vishwa");

// Through getElementbyClassName property we get class by adding name
let boxes = document.getElementsByClassName("box");
console.log(boxes);
// Through this we colored 2nd box
boxes[1].style.backgroundColor = "red";

// Through getElementById property we get id by adding name and we colored 3rd box
document.getElementById("b").style.backgroundColor = "green";

// Through querySelector() property we can change particular selector's property
// document.querySelector(".box").style.backgroundColor = "yellow";

// Through querySelectorAll property we get all child nodes of box class
console.log(document.querySelectorAll(".box"));

// Through for each loop we colored all box class elements
document.querySelectorAll(".box").forEach((e)=>{
   e.style.backgroundColor = "yellow";
})
// Through for loop we colored all box class elements
// let nodeList = document.querySelectorAll(".box");
// for (let i = 0; i < nodeList.length; i++) {
//     nodeList[i].style.backgroundColor = "yellow";
// }

// Through getElementsByTagName property When we add tag name then we get particular tag 
let e = document.getElementsByName(".container");
// matches method checks that this matches or not
e[3].matches("#b");
e[3].matches(".container");
// closest method give the closest element
e[2].closest(".box");
// contains method checks that the particular element in the element is exist or not
document.querySelector(".container").contains(e[1]);
document.querySelector(".container").contains(document.querySelector(".box"));
