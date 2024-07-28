// Here implementing Number Object Methods

const value = 200;
console.log(value); // 200

// Get number value using new keyword 
const balValue = new Number(500);
console.log(balValue); // [Number: 500]

// toString() method to convert Number to String
console.log(balValue.toString()); // 500

// toFixed() method to give precision value to get fixed number
console.log(balValue.toFixed(2)); // 500.00

// toPrecision() method to get precised number 
const n1Value = 32.4550;
console.log(n1Value.toPrecision(3)); // 32.5
const n2Value = 322.4550;
console.log(n2Value.toPrecision(3)); // 322
const n3Value = 1364.4450;
console.log(n3Value.toPrecision(3)); // 1.36e+3

// toLocaleString() method to get locale numbers(by default value in US Standard)
const hundreds = 5000000;
console.log(hundreds.toLocaleString("en-IN")); // 50,00,000

// Some extra methods 
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// There are many Number methods you can use
