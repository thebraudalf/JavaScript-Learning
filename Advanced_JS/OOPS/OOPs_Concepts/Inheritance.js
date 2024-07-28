// Inheritance is a concept that allows one class to inherit methods and properties of another class. 

class User {
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

}

// extends keyword is used to create a subclass that inherits from a superclass.
class Student extends User {
    constructor(username, email, password){
        // super method is used to call the constructor or methods of the superclass.
        super(username);
        this.email = email;
        this.password = password;
    }

    addFile() { 
        console.log(`This file is added by ${this.username}`);
    }
}


const user = new User("Braudalf");
user.logMe(); // Username is Braudalf

const student = new Student("Braudalf", "braudalf@gmail.com", 3232);
student.addFile(); // This file is added by Braudalf
student.logMe(); // Username is Braudalf

// instanceof operator is used to check whether a specific object is an instance of a class or constructor function
console.log(student instanceof User); // true
