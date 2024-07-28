// Primitive Datatypes are:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 33; // Number
const scoreValue = 33.5; // Number

const isloggedOff = true; // Boolean
const temp = null; // Null
let value = undefined; // Undefined

const oldSymbol = Symbol("234"); // Symbol
const newSymbol = Symbol("432"); // Symbol

const bigNum = 23435253242389n; // BigInt

console.log(oldSymbol === newSymbol);


// Non-Primitive Datatypes are:
// Array, Object, Function

const arr = ["Naman", "Raman", "Pawan"]; // Array

const obj = {
    "Name" : "Nehal",
    "Age" : 18,
    "College" : "LIPS"
} // Object

const func = function newFunc() {
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
} // Function
func();

// Using typeof operator to get type
console.log(typeof arr); // Object
console.log(typeof obj); // Object
console.log(typeof func); // Function