console.log("Hello Vishwa");

// Here are some Insertion methods in js dom 
// This method is used to create element
let div = document.createElement("div");
// This method is used to class name in an element
div. className = "alert";
div.innerHTML = "<span>Hello</span>";
// This method is used to put element in the end 
document.body.append(div);
// This method is used to put element in the begining
document.body.prepend(div);
// This method is used to put element before
document.body.before(div);
// This method is used to put element after
document.body.after(div);
// This method is used to replace one element to inserted element 
document.querySelector(".ele2").replaceWith(div);

// InsertAdjacentHTML/Text/Element methods
let cont = document.querySelector(".container");
// insertAdjacentHTML() method is used to insert html
// beforebegin method is used to insert html before begining
// cont.insertAdjacentHTML("beforebegin", "<b>This string is Noice!!</b>");
// beforeend method is used to insert html before ending
// cont.insertAdjacentHTML("beforeend", "<b>This string is Noice!!</b>");
// afterbegin method is used to insert html after begining
// cont.insertAdjacentHTML("afterbegin", "<b>This string is Noice!!</b>");
// afterend method is used to insert html after ending
cont.insertAdjacentHTML("afterend", "<b>This string is Noice!!</b>");

// Node Removel
// remove() method is used to remove a node
let rnode = document.querySelector("#divA");
rnode.remove(document.querySelector("#divA"));

// classList and className methods 
// This method is used to list all element's class names 
document.querySelector(".container").classList;
// This method is used to show the class names
document.querySelector(".container").className;

// These methods are used to add or remove class names
// document.querySelector(".container").classList.add("pink");
// document.querySelector(".container").classList.remove("pink");
// This method is used to toggle class names
// document.querySelector(".container").classList.toggle("pink");
// This method is used to check the class name is exist or not in element 
document.querySelector(".container").classList.contains(".box");

/// There are many methods rather than these in dom 