console.log('Dynamic Website Builder');

function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if(views < 10000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }


   let html = `<div class="container">
   <div class="card">
       <!-- Element 1 to carry image or duration -->
       <div class="ele1 src">
           <img src="${thumbnail}"
               class="thumbnail" alt="Harry Bhai">
           <p class="duration">${duration}</p>
       </div>
       <div class="ele2 title">
           <div>
               <h1>${title}</h1>
           </div>
           <div>
               <ul>
                   <li id="rListStyle" class="cName">${cName}</li>
                   <li class="views">${viewStr} Views</li>
                   <li class="monthsOld">${monthsOld} months ago</li>
               </ul>
           </div>
       </div>
   </div>
</div>
`;

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
createCard("Introduction to Tailwind CSS | Sigma Web Dev video #3", "CodeWithHarry", 1000, 3, "38:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

