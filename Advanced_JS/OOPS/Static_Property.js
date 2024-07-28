// static keyword in method defines a static method or field for a class
// Means static method or variable cannot access by subclass or inherited class

class User {
    constructor(username, loginId) {
        this.username = username;
    }

    loginId = `Login id will be ${this.loginId}`;
    logMe() {
        console.log(`Username : ${this.username}`);
    }

    // Using static keyword to assign static variable
    static setId = `id is set.`;
    // Using static keyword to define static method 
    static createId() {
        console.log(`3232`);
    }

}

User.createId(); // 3232
console.log(User.setId); // id is set.

class Student extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }

}

// You cannot get access to static method in object of a class or a subclass or a inherited class

// Class object
const user = new User("Braudalf");
user.logMe(); // Username : Braudalf
// user.createId(); // TypeError: user.createId is not a function

// Subclass or inherited class object
const student = new Student("Warewolf", "warewolf@gmail.com");
student.logMe(); //  Username : Warewolf
student.createId(); // TypeError: student.createId is not a function
