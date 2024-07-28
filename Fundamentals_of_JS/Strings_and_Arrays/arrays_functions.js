console.log("Hello Vishwa");

//// There are many functions in javascript and some are below

/// Use of map() function in an array
let arr = [1, 3, 5, 33, 32];
// let newArr = [];
// for (let index  = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

// There are two ways to write callback function in map function
// First way
// let newArr = arr.map(e=>{
//     return e**2;
// });
// Second Way
let newArr = arr.map((e, index, array)=>{
    return e**2;
});
console.log(newArr);

// There are two ways to write callback function 
// Use of filter function in an array
// In first way we make function in an variable and then put in filter() function 
// const greaterThanFive = (e)=>{
//     if(e>5){
//         return true;
//     }
//     return false;
// };
// console.log(arr.filter(greaterThanFive));

// Second Way we make function directly in an filter() function 
console.log(arr.filter(e=>{
    if(e>5){
        return true;
    }   
    return false;
}));

// Use of reduce function in an array
let arr2 = [1, 2, 3, 4, 5];
const red = (a, b)=>{
   return a*b;
}
console.log(arr2.reduce(red));
