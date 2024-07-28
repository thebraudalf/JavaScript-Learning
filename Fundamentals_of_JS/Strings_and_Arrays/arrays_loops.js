console.log("Hello Vishwa");

let arr = [1, 2, 55, 77];

// Use for loop for an array
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// Use of for each loop for an array
arr.forEach((value, index, array)=>{
    console.log(value, index, array);
});

const obj = {
    a : 1,
    b : 2,
    c : 3
}
// Use of for in loop for an array
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
      console.log(key, element);  
    }
}

// Use of for of loop for an array
for (const iterater of arr) {
    console.log(iterater);    
}

