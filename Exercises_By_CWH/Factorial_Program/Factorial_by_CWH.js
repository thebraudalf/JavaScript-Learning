console.log("Hello Vishwa");

let a = 6;

function factorial(number){
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1,).reduce((a, b)=> a*b );
    return c;
}
factorial(6)