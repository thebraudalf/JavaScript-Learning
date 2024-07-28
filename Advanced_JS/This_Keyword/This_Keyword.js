//// "This" keyword refers to an object, but it depends on how or where it is being invoked.  

/// "this" refers to the global object.
// console.log(this); // empty obj in node and window object in browser

/// "this" used in object
const user = {
    username: "braudalf",
    price: 250,

    greetingMessage: function () {
        console.log(`${this.username}, Congratulations!`); // braudalf, Congratulations!
        console.log(this); // User Object
    }
}

// user.greetingMessage(); 
// user.username = "warewolf";
// user.greetingMessage(); // warewolf, Congratulations!

/// "this" used in function

// In normal function

// function greetingMessage() {
//     let username = "braudalf";
//     console.log(`${this.username}, Congratulations!`); // undefined, Congratulations!
//     console.log(this); // Window Object
// }
// greetingMessage(); 

// In function which defined by variable

// const greetingMessage = function () {
//     let username = "braudalf";
//     console.log(`${this.username}, Congratulations!`); // undefined, Congratulations!
//     console.log(this); // Window Object
// }
// greetingMessage();

// In arrow function

// const greetingMessage = () => {
//     let username = "braudalf";
//     console.log(`${this.username}, Congratulations!`); // undefined, Congratulations!
//     console.log(this); // Empty Object
// };
// greetingMessage();


//// It is also used in Events and in bind, call, apply methods
