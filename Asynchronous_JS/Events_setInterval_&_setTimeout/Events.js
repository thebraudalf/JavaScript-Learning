console.log("Hello Vishwa");
let btn = document.querySelector("#btn");
// addEventListener method is used to do some activity in the particular element like click, double click and select

// "click" is used to do what is happening when you click
btn.addEventListener("click", () => {
    alert("click is working");
})

// "dblclick" is used to do what is happening when you double click
btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<div>No doubt <b>braudalf is best</b></div>"
})

// "keydown" is used to track what key is pressed
btn.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keycode);
})
