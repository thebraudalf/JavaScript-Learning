console.log("Async and Await");

// Executing code without the use of Async and Await
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(433);
//         }, 3000);
//     })
// }
// console.log("Data Modules");
// console.log("Data Loading");
// let data = getData();
// data.then((value) => {
//     console.log("Data Completion");
// });


// If we have to execute code asynchronously but use to wait for a function to complete we can use async and await keywords
// async keyword is used to execute all code
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(255);
        }, 3000);
    })
}

// await keyword is use to wait for a function to complete
// From here you have to use await in the async function you can be use await without async
async function main() {
    console.log("Data Modules");
    console.log("Loading Data");
    let data = await getData();
    console.log(data);
}
main();

// Use of Async Await for getting data 
async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(typeof data); // object
        console.log(data.id); // 
    } catch (error) {
        console.log("E: ", error);
    }
}
getUserData();