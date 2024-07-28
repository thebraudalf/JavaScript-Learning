/// Immediately Invoked Function Expressions (IIFE) : It is a function that is executed immediately after it is created.
// Sometimes, It is used to protect from global pollution like some global variable and it is used to immediately execute the Database file.

// Named IIFE
(function welcome() {
    console.log("Welcome, User!"); // Welcome, User!
})();

// Note: It is necessary to put semicolon ";" after iife created. It is used to stop the context.

// Unamed IIFE
( (name) => {
    console.log(`Welcome, ${name}!`); // Welcome, braudalf!    
})("braudalf");
