console.log("Business Name Generator");

function Adjectives() {
    let f = "Crazy";
    let s = "Amazing";
    let t = "Fire";
    let rand = Math.floor(Math.random()*3);

    if(rand<1){
        return f;
    }

    else if(rand<2){
        return s;
    }

    else if(rand<3){
        return t;
    }
    
    else{
        console.log("Value doesn't exists");
    }
}

function Shop_Name() {
    let f = "engine";
    let s = "foods";
    let t = "garments";
    let rand = Math.floor(Math.random()*3);
    
    if(rand<1){
        return f;
    }

    else if(rand<2){
        return s;
    }

    else if(rand<3){
        return t;
    }

    else{
        console.log("Value doesn't exists");
    }
}

function Another_Word() {
    let f = "bros";
    let s = "limited";
    let t = "hub";
    let rand = Math.floor(Math.random()*3);

    if(rand<1){
        return f;
    }

    else if(rand<2){
        return s;
    }

    else if(rand<3){
        return t;
    }

    else{
        console.log("Value doesn't exists");
    }
}

console.log(`Our business name is ${Adjectives()} ${Shop_Name()} ${Another_Word()}`);