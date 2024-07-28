// call() : This method is used to invoke a function with a given this value and arguments provided individually.
// It passes the one function's current execution context to another function.

function SetUsername(username) {
    // Complex code 
    this.username = username;
}

function createUser(username, email, password) {
    // Using call() method for using old function's "this" in new function's "this"
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const newUser = new createUser("Braudalf", "braudalf@gmail.com", 234343);
console.log(newUser); // newUser Object

