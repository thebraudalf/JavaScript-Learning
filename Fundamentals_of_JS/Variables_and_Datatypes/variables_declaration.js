// This type of function is used to get print values or string
console.log("Hello World");

// var keyword is used to declare global variables.
var a = 3;
var b = 4;
// This assigned value is used to add a variable to 2
a = a + 2;
console.log(a);

// Const keyword is used to declare constant variables which can't be assigned after
const c = 2;
//c = 1; //Not Allowed 
console.log(c);
// let keyword is only used to declare variables in a block code
{
    let a = 4;
    console.log(a);
}
console.log(a);


/*
Prefer not to use 
var keyword to declare variable bcz of
issue in block scope and functional scope 
*/
