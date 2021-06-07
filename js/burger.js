// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
let html = document.getElementsByTagName("html")[0];

hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {
        // if (window.innerWidth <= 575 && !(window.innerWidth > 575)) {
        //     hamburger.style.right = "47px";
        // }

        html.style.overflowY = "hidden";
        // html.style.marginRight = "17px";
    } else {
        //     if (window.innerWidth <= 575 && !(window.innerWidth > 575)) {
        //         hamburger.style.right = null;
        //     }
        html.style.overflowY = "scroll";
        //     html.style.marginRight = "0px";
    }
    // Do something else, like open/close menu
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 767) {
        if (hamburger.classList.contains("is-active")) {
            hamburger.click();
            html.style.overflowY = "scroll";
            html.style.marginRight = "0px";
        }

    }
    if (window.innerWidth > 575) {
        if (hamburger.classList.contains("is-active")) {
            hamburger.style.right = null;
        }
    }
    if (window.innerWidth <= 575 && !(window.innerWidth > 575)) {

        if (hamburger.classList.contains("is-active")) {
            hamburger.style.right = "47px";
        }
    }
});