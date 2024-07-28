/// Stack Memory: The stack is a segment of memory that stores temporary variables created by a function, objects and array. In stack, variables are declared, stored and initialized during runtime. 
// All Primitive DataTypes such as String, Number, BigInt, Symbol, Boolean, Null, Undefined are stored in the stack memory.

/// Heap Memory: Heaps are memory areas allocated to each program. Memory allocated to heaps can be dynamically allocated, unlike memory allocated to stacks. It is also known as Dynamic Memory.
// All Reference(Non-Primitive) DataTypes such as Array, Object, and Function are stored in the heap memory.  

// Use of Stack Memory
let myName = "Braudalf";
let myAnotherName = myName;

myAnotherName = "WereWolf";

console.log(myAnotherName); // WereWolf
console.log(myName); // Braudalf

// Use of Heap Memory
let userOne = {
    email: "braudalf@gmail.com",
    upi: "braudalf@sbi"
}

let userTwo = userOne;
userTwo.email = "wereWolf@gmail.com";

console.log(userTwo.email); // wareWolf@gmail.com
console.log(userOne.email); // wareWolf@gmail.com