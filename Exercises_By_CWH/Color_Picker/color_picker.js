const button = document.querySelectorAll(".btn");
const body = document.querySelector("body");

button.forEach( (button) => {

    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);

        if (e.target.id === "#Ffc0cb") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "#Ff0000") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "#0000ff") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "#FFFFFF") {
            body.style.backgroundColor = e.target.id;
        }
});
});
