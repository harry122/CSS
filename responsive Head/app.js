let toggle = document.querySelector(".toggle");
let menubar = document.querySelector(".header ul");

toggle.addEventListener("click", function(e) {
    e.preventDefault();
    toggle.classname += " togglerot";
    if(menubar.className == "navbar"){
        menubar.className += " responsive";
    } else {
        menubar.className = "navbar";
    }
})