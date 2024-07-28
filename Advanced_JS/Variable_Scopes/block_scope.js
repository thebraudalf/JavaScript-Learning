// Block scope restricts the variable that is declared inside a specific block, from access by the outside of the block. 
// With var keyword
var fVar = 100;

// With const keyword
const fConst = 150;
 
// With let keyword
let fLet = 200;

// Variables in Block
if (true) {
    var fVar = 150;
    const fConst = 250;
    let fLet = 130;
    console.log("INNER: ", fLet); // INNER:  130
    console.log("INNER: ", fConst); // INNER:  250
}

console.log(fVar); // 150
console.log(fLet); // 200
console.log(fConst); // 150

// Nested If 
if (true) {
    const firstname = "ware";
    if (firstname === "ware") {
        const lastname = "wolf";
        console.log(firstname + lastname); // warewolf
    }

    // console.log(lastname); // ReferenceError: lastname is not defined
}
// console.log(firstname); // ReferenceError: firstname is not defined

