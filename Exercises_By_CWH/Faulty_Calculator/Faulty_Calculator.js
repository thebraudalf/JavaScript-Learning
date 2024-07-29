console.log("Faulty Calculator");

let random = Math.random();
console.log(random);
var userInput1 = prompt("Enter the First No.");
var userInput2 = prompt("Enter the Second No.");
var o = prompt("Enter the Operation");

const obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
} 


if(random > 0.1){
    console.log(`Result : ${userInput1} ${o} ${userInput2}`);
    alert(`Result : ${eval(`${userInput1} ${o} ${userInput2}`)}`);    
}

else{
    o = obj[o]
    alert(`Result : ${eval(`${userInput1} ${o} ${userInput2}`)}`)
}