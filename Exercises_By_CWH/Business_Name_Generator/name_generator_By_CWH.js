console.log("Hello Vishwa");

let first, second, third;
let rand;

// It generates Adjactives and First value
rand = Math.random();
if(rand<0.33){
    first = "Crazy";
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}

// It generates Shop Names and Second value
rand = Math.random();
if(rand<0.33){
    second = "Engine";
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

// It genrates Another value or Third value
rand = Math.random();
if(rand<0.33){
    third = "Bros";
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);