// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
let html = document.getElementsByTagName("html")[0];

hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
        html.style.overflowY = "hidden";
        html.style.marginRight = "17px";
    } else {
        html.style.overflowY = "scroll";
        html.style.marginRight = "0px";
    }
    // Do something else, like open/close menu
});