// Javascript is prototype based language, prototypes are the mechanism by which JavaScript objects (Array, Date, Promise, etc.) inherit features from one another.

const myName = "braudalf    ";
const otherName = "warewolf  ";

// This method is undefined
// console.log(myName.rightLength); 


const myHeros = ["ironman", "captain_america", "doctor_strange", "spiderman"];

const heroPower = {
    ironman : "genius",
    captain_america : "strength",
    doctor_strange : "multiverse travel", 
    spiderman : "sling",

    getIronmanPower : function () {
        console.log(`Ironman power is ${this.ironman}`);
    }
} 

// Adding methods in javascript objects

// This method is for all javascript objects
Object.prototype.print1 = function () {
    console.log(`This is method 1 for all javascript objects`);
}

// This method is only for array 
Array.prototype.print2 = function () {
    console.log(`This is method 2 only for Array`);
}

// This method is only for string
String.prototype.rightLength = function () {
    console.log(`The original length is ${this.trim().length}`);
}


// You can add methods and properties for other objects as well.

// heroPower.print1(); // This is method 1 for all javascript objects
// heroPower.print2(); // TypeError: heroPower.print2 is not a function (bcz it's only for array)

myHeros.print1(); // This is method 1 for all javascript objects
myHeros.print2(); // This is method 2 only for Array

myName.rightLength(); // The original length is 8
"hero  ".rightLength(); // The original length is 4              

// Prototypal inheritance : When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. 

// Old approach

const User = {
    name : "Braudalf",
    email : "braudalf@gmail.com"
}

const Student = { 
    study : true
}

const studyingSupport = {
    isAvailable : true
}

// Here __proto__  property is a used to references another object.
// Inside of the Object
const SUSupport = {
    doAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : studyingSupport
}

//As well as Outside of  the Object 
Student.__proto__ = User;


// Modern (New) approach

// The Object.setPrototypeOf() method in JavaScript allows you to set the prototype of a specified object to another object or null.
Object.setPrototypeOf(SUSupport, Student);

