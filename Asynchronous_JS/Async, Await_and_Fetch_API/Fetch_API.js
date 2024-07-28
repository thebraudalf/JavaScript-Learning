console.log("Fetch_API");

// Fetch API is javascript interface which is used to fetching resources (across all over the network) accessing and manipulating through the protocols such as (responses and requests).
// async function getData() {
    // Here we fetch users data through this below link
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // These methods are used to check response and promise
    // fech.then(response => response.json())
    // fech.then(json => console.log(json))

    // .json() method is used to parsed data in json format.
//     let data = x.json();
//     return data;
// }

// async function main() {
//     console.log("Loading Data");
    
    // Here we call fetch data through this user defined getData() function
//     let data = await getData();
//     console.log(data);
//     console.log("Data Processing");
//     console.log("Processed Data");
// }
// main();

// Here we use Post request to fetch data
async function getData() {
    let x = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST", // Used to request to fetch data // *GET, POST, PUT, DELETE, etc. 
        body: JSON.stringify({
            title: 'user',
            body: 'flag',
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json',
          },
      })

      let data = await x.json(); 
      return data;
}

async function main() {   
    let data = await getData();
    console.log(data);
    console.log("Data Processing");
    console.log("Processed Data");
}
main();

