/// When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

// Nested function 
function one() {
    const username = "ware";
    
    function two() {
        const lastname = "wolf";
        console.log(username); // ware
    }
    // console.log(lastname); // ReferenceError: lastname is not defined

    two();
}
one();

// If function can declare through variable it cannot invoked before function declare. It will more clear when hoisting come.
// Normal function 
console.log(addOne(4)); // 5
function addOne(num) {
    return num + 1;
}

// function declare through variable
console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 1;
}

