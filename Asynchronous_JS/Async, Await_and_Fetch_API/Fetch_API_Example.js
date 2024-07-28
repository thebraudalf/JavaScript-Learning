console.log("Fetch API");

let facts = document.querySelector("#facts");
let buttons = document.querySelector("#btn");

// Use of fetch api by async await function 
// const getFacts = async () => {
//     let response = await fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/");
//     console.log("Getting data....");
//     console.log(response);
//     let data = await response.json();
//     document.getElementById("facts").innerText = data[1].Description;
// };

// Use of fetch api using then() method
function getFacts() {
    fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/")
    .then((response) => { 
        return response.json(); 
    })
    .then((data) => { 
        console.log(data);
        document.getElementById("facts").innerText = data[1].Description;
    })
    
}
addEventListener("click", getFacts);