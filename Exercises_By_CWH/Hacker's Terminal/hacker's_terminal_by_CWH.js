console.log("Welcome to the Hacker's Terminal");

// Arrow Function to add item with randomDelay
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

// It performs a delay of 1 to 7 seconds through Math.random() method 
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
}

async function main() {

    // It performs a action where it blinks dots
    let t = setInterval(() => {
       let last = document.body.getElementsByTagName("div");
       last = last[last.length - 1];
       if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
       } 
       else{
        last.innerHTML = last.innerHTML + ".";
       }
    }, 100);

    // This an array of strings 
    let text = ["Initializing Hacking",
        "Reading your files",
        "Password files Detected",
        "Sending all passwords and personal files to the server",
        "Cleaning Up"];

    // Iterate these array elements
    for (const item of text) {
        await addItem(item);
    }

    await randomDelay();
    clearInterval(t);

}
main();
