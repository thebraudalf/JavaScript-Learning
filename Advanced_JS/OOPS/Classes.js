// Classes are a template for creating objects. They encapsulate data with code to work on that data. This will done through two ways class declaration and class expression (just like function expression).
// class keyword is used to make class.
// constructor method is used to creating and intializing an objects created with a class.

// Adding methods through Class declaration
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return`${this.password}abc`;
    }

    updateUsername() {
        return`${this.username}`;
    }

}

const user = new User("Braudalf", "braudalf@gmail.com", 232);
console.log(user); // user Object
console.log(user.encryptPassword()); // 232abc
console.log(user.updateUsername()); // Braudalf

// Behind the scene the constructor function is making for creating objects

// const User = function (username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function () {
//     return`${this.password}abc`;
// }

// User.prototype.updateUsername = function () {
//     return`${this.username}`;
// }

// const user = new User("Braudalf", "braudalf@gmail.com", 232);
// console.log(user); // NewUser Object
// console.log(user.encryptPassword()); // 232abc
// console.log(user.updateUsername()); // Braudalf

