console.log("Hello Vishwa");

// Here is the use of callback functions
// Callback functions means calling functions in the functions multiple times. 

const fn = () => {
console.log("#Five_Star_Do_Nothing");
}

const callback = (args) => {
    console.log(args);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    // onload (event handler) loads the callback function
    sc.onload = callback ("Braudalf",fn);
    document.head.append(sc);   
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);
