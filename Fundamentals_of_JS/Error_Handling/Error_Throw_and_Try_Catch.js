console.log("Error Handling");

let a = prompt("Enter the First Number");
let b = prompt("Enter the Second Number");

// It will show an error if you use a + b because you concatinate two strings
// let add = a + b;

// parseInt() method is used to convert string into integer
let add = parseInt(a) + parseInt(b);
// We can use throw syntax to give error message
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("You can't put string in a integer variable");
}

// try {} is used to check code is working or not
// catch {} is used to catch error and give message.
// finally {} is used to when one or both of above has return
function main() {
    try {
        // let x = 1;
        console.log("The Sum is ", x * add);
        return true;

    } catch (error) {
        console.log("This code has error");
        return true;

    } finally {
        console.log("The code is working now we have to put this in next stage");
    }
}
let c = main();