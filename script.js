const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
    }

//js codde to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
//js code to keep user selected mode even after refreshing refreshh
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode")
    }else{
        localStorage.setItem("mode", "dark-mode")
    }
});


//js codde to toggle dark and light mode
searchToggle.addEventListener("click", () => {
    
    searchToggle.classList.toggle("active");
});



sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

// Close sidebar
siderbarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});


// Close sidebar when clicking outside
body.addEventListener("click", e => {
    let clickedElement = e.target;

    if (!clickedElement.classList.contains("sidebarOpen") && !clickedElement.classList.contains("menu")) {
        nav.classList.remove("active");
    }
})



var acc = document.getElementsByClassName("accordion");
var i;
for (i=0; i < acc.length; i++){
    acc[i].addEventListener("click" , function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;
        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        }else{
            pannel.style.display = "block";

        }
    })
}

