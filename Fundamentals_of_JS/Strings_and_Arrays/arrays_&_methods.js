console.log("Hello Vishwa");

// Arrays are used to store multiple data types include integer, strings, etc.
// Arrays are mutable means it can be change. We write array in square brackets [].
let arr = [2, 3, "Naman", 32, 555];
console.log(arr);

// Here you can print array using index numbers
console.log(arr[0]);
console.log(arr[3]);
// You can also change the array elements through index numbers
arr[0] = "Raman";
arr[2] = 72;

// It deletes elements from an array 
delete arr[3];
console.log(arr);

/// Methods and Properties of a array
// It shows the length of an array
console.log(arr.length);
// It shows the type of an array
console.log(typeof arr);

// This method is used to join strings in an array
console.log(arr.toString());
// This method is used to join elements in an array
console.log(arr.join(" or "));
// It is used to pop or remove the last element of an array
console.log(arr.pop());

// It is used to push or return an length of an array
console.log(arr.push(2));
console.log(arr.push("harry"));

// It is used to shift an array
console.log(arr.shift("Raman"));
// It is used to unshift an array
console.log(arr.unshift("Raman"));
console.log(arr);

// This method is used to reverse an array
console.log(arr.reverse());

// It used to concat or combine the array
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [9, 10, 11, 12];
console.log(a1.concat(a2,a3));

// This method is used to sort an array
// console.log(arr.sort());

// This function is used to splice an array
let number1 = [1, 2, 3, 4, 5];
number1.splice(2.3, 222, 333);
console.log(number1);

// This method is used to slice an array to create an new array
const number2 = [1, 2, 3, 4, 5];
console.log(number2.slice(2));

// There are many methods rather than this
