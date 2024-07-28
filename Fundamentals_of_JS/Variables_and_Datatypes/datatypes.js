// Data Types : There are two types of data types :

// 1. Primitive DataTypes
let p = "Script js"; // String
let q = 12; // Integer
let r = 2.12; // Float
let s = undefined; // Undefined
const t = 4; // Integer
let u = true; // Boolean
let v = null; // Null

console.log(p, q, r, s, t, u, v);

// typeof is not a method it's operator which gives type of a assigned value 
console.log(typeof p, typeof q, typeof r, typeof s /*Output: Undefined*/, typeof t, typeof u, typeof v /*Output: Object*/);

// 2. Objects
let o = {
    "name": "Nehal Jain",
    "job code": 4000,
    "is_handsome": true
}
console.log(o);

// Externally add an element
o.salary = "15 crores";
console.log(o);