// Lexical Scoping : It refers to the way variable scope is determined by the physical placement of the code, this means a function's scope is defined by its location within the source code.
// It describes how nested functions have access to variables defined in parent or outer scope.

function outer1() {
    let Var = "Performing Lexical Scoping";

    // console.log(secret); // ReferenceError: secret is not defined

    function inner1() {
        console.log(Var); // Performing Lexical Scoping
    }

    function inner2() {
        let secret = "123Secret";
    }
    
    inner1();

    inner2();

}

outer1();
// console.log("Outer :" + Var); // ReferenceError: Var is not defined

// Note : You cannot access nested function variable in parent function. And also you cannot access parent function variable outside the parent function.
// Otherwise you get reference error.

console.log("\n");


// Closures : A closure is a combination of a function bundled together(enclosed) with references to its surronding state the lexical environment.
// A closure is a function having access to the parent scope, even after the parent function is closed or finished executing.

function outer2() {
    let Var = "Performing Closures";

    function inner() {
        console.log(Var);
    }

    // passing reference of nested function
    return inner;
}

// finished executing of parent function or anonymous function
const outer = outer2();

outer();

// Note : When you passing nested function you pass your both parent and nested function that's why nested function log message.

// Note : You cannot access parent function whose execution is finished with same function definition.
// Otherwise you get undefined.
