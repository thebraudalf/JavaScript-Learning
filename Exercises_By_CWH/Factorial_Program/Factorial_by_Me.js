console.log("Hello Vishwa");

let n = 6;
let f = 1;

// Factorial using for loop
for(let i=1; i<=n; i++){
    f = f * i; 
}
console.log("Factorial of 6! = " + "6 x 5 x 4 x 3 x 2 x 1 " + "= "+ f);

// Factorial using Reduce function
let arr = [1, 2, 3, 4, 5, 6];
// And reduce function using arrow function
console.log("Factorial of 6! = " + arr.reduce((a, b)=>{ return a*b; }));

