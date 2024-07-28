console.log("Hello Vishwa");

// Strings are used store strong character in quotes "" 
// Strings are immutable means strings can not be change
let Origianl_name = "rohan";
let dost = "raman";

// Here you can print string characters using index numbers
console.log(Origianl_name[0]);
console.log(Origianl_name[1]);
console.log(dost[2]);

console.log("Hey my name is " + Origianl_name + " And my friend name is " + dost);

// This is the example of template literals
console.log(`Hey my name is ${Origianl_name} And my friend name is ${dost}`);

// Escape sequences in javascript 
// here /n : this type of escape sequences are used to add newline in a string.
console.log("Nam\nan");
/// Methods and properties of a string 
// This property is used to show the length of a string in numbers
console.log(Origianl_name.length);
// This method is used to uppercase the string characters
console.log(Origianl_name.toUpperCase());
// This method is used to lowercase the string characters
console.log(dost.toLowerCase());
// String Slicing
console.log(dost.slice(1,3));
console.log(dost.slice(1));
// String Replace
console.log(dost.replace("ma", "cha"));
// Concatinatioon of strings
console.log(Origianl_name.concat(dost, "sohan", "kamlesh"));
// This method is used to get character from entered position in a string
console.log(Origianl_name.charAt(3));
// This method is used to get the index number from an string character
console.log(Origianl_name.indexOf("an"));
// There are many type of string methods rather than these in javascript
