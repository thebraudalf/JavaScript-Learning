console.log("Hello World");

// There are many types of operators in js which are Airthmetic, Assignment, Logical and Comparison operators.
var a;
var b;
a = 10;
b = 2;

// Arithmetic Operators
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b); //Basically it is a Exponentation operator
// console.log(a % b);

// This is ternary operator which is used as conditionals
// Syntax of ternary operator
// init = condition ? (value 1):(value 2);
let c = a<b ?("True"):("False");
// console.log(c);

/// Comparison Operators

// comparison with Number
// console.log(1 < 2);
// console.log(2 > 1);
// console.log(1 <= 2);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // True
// console.log("02" > 1); // True


// comparision with Null
// console.log(null > 0); // False
// console.log(null == 0); // False
// console.log(null >= 0); // True

// comparison with Undefined
// console.log(undefined == 0); // False
// console.log(undefined > 0); // False
// console.log(undefined < 0); // False


// Difference between Equality(==) operators and Strict Equality(===) operator
// Equality(==) operator: It attempts to convert and compare operands that are of different types.
console.log("2" == 2); // True

// Strict Equality(===) operator: It always considers operands of different types to be different.
console.log("2" === 2); // False