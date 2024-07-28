/// Here implementing Date Object Methods

const oldDate = new Date();

// toString() methods used to convert Date Object in a string
console.log(oldDate.toString()); // Day MM DD YY HH MM SS TimeZone
console.log(oldDate.toDateString()); // Day MM DD YY
console.log(oldDate.toLocaleString()); // MM DD YY HH MM SS
console.log(oldDate.toLocaleDateString()); // MM DD YY
// There are many toString() methods in Date Object


// You can pass parameter in new Date() constructor
// Syntax: let var = new Date(year,month,day,hours,minutes,seconds,ms);
// let newDate = new Date("2024 May 22");
// console.log(newDate.toLocaleString()); // YY MM DD Hh MM SS
// let newDate = new Date(2024, 2, 22, 11, 10, 6);
// console.log(newDate.toLocaleString()); // YY MM DD HH MM SS MS
let newDate = new Date("05-22-2024");
console.log(newDate.toLocaleString());


// Date converts in time stamps or miliseconds 
// Date.now() method is used to get current timestamps in milliseconds
 let timestamps = Date.now();
 console.log(timestamps); // MS
console.log(Math.floor(Date.now()/1000)); // MS

// Milliseconds to Date
let mSDate = new Date(1716358990);
console.log(mSDate.toLocaleString());

// Internationlisation in date
newDate.toLocaleString('default', {
    weekday: "long",
});
