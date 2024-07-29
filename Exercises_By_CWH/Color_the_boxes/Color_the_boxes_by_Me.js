console.log("Color The Boxes");

// Used to generate random colours
function getRandomColor() {
    // 16777215 is white in decimal no. which we convert into hexadecimal through .toString() method
    var bgColor = "#" + Math.floor(Math.random()*16777215).toString(16);  
    return bgColor; 
}

// Used to select all elements of box class and call function
let boxes = document.body.querySelectorAll(".box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = getRandomColor();
}
