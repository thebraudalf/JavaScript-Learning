// Here implementing Math Object Methods

console.log(Math); // You get all the math methods in browser

// Math.abs() method to get absolute(positive) value
console.log(Math.abs(-6.2)); // 6.2

// Math.round() method to get nearest integer
console.log(Math.round(5.6)); // 6

// Math.ceil() method to get rounded up to nearest integer
console.log(Math.ceil(4.1)); // 5

// Math.floor() method to get rounded down to nearest integer
console.log(Math.floor(4.3)); // 4

// Math.trunc() method to get integer part of value
console.log(Math.trunc(3.4)); // 3

// Math.sign() method to get negative, null or positive 
console.log(Math.sign(4)); // 1

// Math.random() method to get random value between 0 to 1 
// console.log(Math.random()); // Random Value between 0 to 1
// console.log(Math.floor(Math.random()*10) + 1); // Random Value between 1 to 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random value between 10 to 20

// There are many Math methods you can use