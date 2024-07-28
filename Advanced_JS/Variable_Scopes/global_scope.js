/// Variables declared Globally (outside any function) have Global Scope. And Variable which declared outside a function can be used inside a function this variable is called global variable.

// With let keyword
// let carName = "Volvo";
// With const keyword
const carName = "Volvo";

function myFunction() {
console.log(carName);
}
myFunction(); // Volvo
