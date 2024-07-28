/// Type Conversion refers to the process of implicit or explicit conversion of values from one data type to another.
/// Explicit conversion is done with the help of Number() method, String() method, etc.  

let firstNumber = "23";
// Here we convert string datatype to integer using Number object
let newNumber = Number(firstNumber);
console.log(typeof(firstNumber));

// Conversion of boolean to number
let firstBool = true;
console.log(typeof(Number(firstBool)));

// Conversion of number to string
let val = 33;
let str = String(val);
console.log(str);

// Conversion of string to number
const val1 = Number("5");
const val2 = 9;
let sum = val1 + val2;
console.log(sum); // We get 14

let num = "0x11";
let numChange = Number("0x11");
console.log(numChange); // We get 17