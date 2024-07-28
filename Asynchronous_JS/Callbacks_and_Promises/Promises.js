console.log("Promises");

// Here is promises which is used to exit callback hell or multiple callback function
// resolve() method returns a promise object that is resolved.
// reject() method returns a promise object that is rejected.
let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("Wait for sec, Work in progress!!");
    }

    else {
        setTimeout(() => {
            console.log("Yo man, site is working!!");
            resolve("Done");
        }, 3000);
    }
})

/// .then() method is used for resolve cases and reject cases
/// .catch() method is used to catch error in reject cases
prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("Wait for sec, Work in progress 2!!");
    }

    else {
        setTimeout(() => {
            console.log("Yo man, site is working 2!!");
            resolve("Done 2");
        }, 3000);
    }
})

prom2.then((data) => { 
    console.log(data); // Done 2
}).catch((error) => {
    console.log(error); // Wait for sec, Work in progress 2!!
});

let prom3 = new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
        resolve({ username: "braudalf", password: "123" });
    }
    else {
        reject("ERR: Somthing went wrong");
    }
})

// finally() method returns a Promise object when promise is settled. 
prom3.then((user) => {
    console.log(user); // { username: "braudalf", password: "123" }
    return user.username;
}).then((username) => {
    console.log(username); // braudalf
}).catch((error)=>{
    console.log(error); // ERR: Somthing went wrong
}).finally(() => {
    console.log("Finally is working!!");
})

//// Promise API

// promise.all() method is used to wait to resolve and return all promises and the array of their result
// let pa = Promise.all([prom1, prom2]);
// pa.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })


// promise.allSettled() method is used to wait to settle and return all promises and the result as an array of objects with their status and value
// let pa2 = Promise.allSettled([prom1, prom2]);
// pa2.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.race() method is used to wait and do race between all promises and then display resolve or error.
// let pa3 = Promise.race([prom1, prom2]);
// pa3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.any() method is used to wait for the first promise to fulfill and throws an AggregateError if all the promises are rejected
// let pa4 = Promise.any([prom1, prom2]);
// pa4.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.resolve() method is used to make a resolved promise with given value
// let pa5 = Promise.resolve([prom1, prom2]);
// pa5.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.reject() method is used to make a rejected promise with given error
// let pa6 = Promise.reject([prom1, prom2]);
// pa6.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

// There are many promise api.
