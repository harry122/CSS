let toggleButton = document.querySelector("#toggle");
let displayList = document.querySelector("ul");
// let displayListItem = document.querySelector("ul li");

toggleButton.addEventListener("click",function(e){
    e.preventDefault();
    // console.log("hello");
    // displayListItem.classList.add("navList");
    // displayList.classList.add("nav-toggle");
    // displayListItem.classList.add("nav-item");
    // toggleButton.classList.add("toggle");

if(displayList.className == "navbar") {
    displayList.className += ' responsive';
} else {
    displayList.className = 'navbar';
}

});
