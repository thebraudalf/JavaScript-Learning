/// Objects: object is used to store various keyed collections and more complex entities. 
// Objects can be creating using object literals, using constructor function or singleton, and Object.create() method

// Symbol
const mySym = Symbol("key1");

// Object literals
let person = {
    name: "braudalf",
    "anotherName": "warewolf",
    location: "india",
    email: "braudalf@google.com",
    isLoggedIn: false,
    [mySym]: "key2"
};

console.log(person.name); // braudalf
console.log(person.email); // braudalf@google.com
console.log(person.anotherName); // warewolf

// Another way to access
console.log(person["location"]); // india
console.log(person["anotherName"]); // warewolf
// access to symbol
console.log(person[mySym]); // key2

person.email = "braudalf@hero.com"
// Object.freeze() method is used to freeze(stop) object
// Object.freeze(person);
person.email = "braudalf@chitchat.com"
console.log(person.email); // braudalf@hero.com

// add func in object
person.applause = function(){
    console.log("Congrats Js User");
}
person.applauseAgain = function(){
    console.log(`Congrats Js User, ${this.name}`);
}

console.log(person.applause()); // Congrats Js User
console.log(person.applauseAgain()); // Congrats Js User, Braudalf
