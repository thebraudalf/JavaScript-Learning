// Implement these code snippets in browser environment for call stack visuals. 

// This code has work normal execution
// function first() {
//     console.log("first"); // first
// }
// function second() {
//     console.log("second"); // second
// }
// function third() {
//     console.log("third"); // third
// }
// first();
// second();
// third();


// This code work as LIFO (Last In First Out)
function first() {
    console.log("first"); // first
    second();
}
function second() { 
    console.log("second"); // second
    third();
}
function third() {
    console.log("third"); // third
}
first();
second();
third();
