// Object Literal: It is used for creating an object that is composed of key-value pairs.  

const user = {
    username: "Braudalf",
    loginCount: 4,
    loggedIn: true,

    getUserDetails: function () {
        // console.log("Get details from data"); // Get details from data
        // console.log(`Username: ${this.username}`); // Username: Braudalf
        console.log(this); // user Object
    }

}

// console.log(user.username); // Braudalf
// console.log(user.getUserDetails());
// console.log(this); // Empty Object in node and window object in browser


// Object Constructor: It is used to create an object “type” that can be used multiple times without redefining the object every time. 

function User(username, logInCount, loggedIn) {
    this.username = username;
    this.logInCount = logInCount;
    this.loggedIn = loggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Braudalf", 4, true);
// console.log(userOne); // new User Object

const userTwo = new User("Warewolf", 8, false);
// console.log(userTwo); // new User Object

console.log(userOne.constructor); // [Function: User]


// Note: You have to name constructor function first letter in capital.
// Otherwise "Identifier 'user' has already been declared" error shown in terminal. 



