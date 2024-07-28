console.log("Function");

// function is use to perform repeatative block of code 
function nice(name) {
    console.log(name + "you are doing great cuz I see");
    console.log(name + "but you have to improve yourself");
    console.log(name + "Don't be demotivated by me");
}

nice("harry");

function add(a,b) {
    return a+b;
}

console.log(add(1,2));

const funct = (a)=>{
    console.log("This code is working ",a);
    console.log("This code is working ",a);
    console.log("This code is working ",a);
    console.log("This code is working ",a);
}

// funct(4);
// funct(43);


// Function using spread operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); // [ 500, 2000 ]

// Use of Functions on Arrays & Objects
// Array
const getArray = [230, 320, 820, 400];

const arrFunc = function (getArray) {
    return getArray;
}
// console.log(arrFunc(getArray)); // [ 230, 320, 820, 400 ]

// Objects
const getObject = {
    username: "braudalf",
    price: 300
};

const obj = function (getObject) {
    console.log(`Username is ${getObject.username} and Price is ${getObject.price}`);
}
obj(getObject); // Username is braudalf and Price is 300
obj({
    username: "warewolf",
    price: 200
}); // Username is warewolf and Price is 200

