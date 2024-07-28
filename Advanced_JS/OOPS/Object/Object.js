/// All JavaScript objects (Array, Date, Promise, etc.) inherit properties and methods from a prototype.

// Object.prototype is inherited by all objects and it has no prototype (its prototype is null).

// Making normal function
function name(name) {
    console.log(`Hey! ${name}`);
}

// Adds property to the function
name.power = 2; 

console.log(name("Braudalf")); // Hey! Braudalf
console.log(name.power); // 2

// log prototype to get object.prototype 
console.log(name.prototype); // Empty object in node js and Object.prototype in browser

// Prototype property also allows you to add new methods and properties to object constructors
function createUser(username, id) {
    this.username = username;
    this.id = id;
}

// adding log user property
createUser.prototype.logUser = "Hey! ${this.username}";

// adding increment method
createUser.prototype.increment = function() {
    this.id++;
}

// adding print method
createUser.prototype.print = function() {
    console.log(` ${this.username} your Id is ${this.id}`);
}

// With "new" keyword
const firstUser = new createUser("TheBraudalf", 23);
firstUser.increment(); // Value incremented by +1 
firstUser.print(); // TheBraudalf your Id is 23
firstUser.logUser; // Hey! Braudalf
// Without "new" keyword 
// const secondUser = createUser("WareWolf", 21);
// secondUser.print(); // TypeError: "Cannot read properties of undefined" error shown


// Note: Don't need to add prototype keyword for invoking

