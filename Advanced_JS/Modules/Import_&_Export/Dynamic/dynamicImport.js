// Dynamic Import is a function like expression which is used by import() method allows you to load module asynchronously and dynamically.

const { sayHii, sayHola } = await import("./greetings.js");

sayHii("User");
sayHola("User");


// Handling multiple imports using promises
const promises = Promise.all(
    [
        await import("../Combine/calc.js"),
        await import("../Combine/printMyName.js")
]
);

promises.then((result1) => console.log(result1[0].mul(3, 4)))
