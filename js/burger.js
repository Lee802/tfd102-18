// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
let html = document.getElementsByTagName("html")[0];
hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains("is-active")) {


        if ($('div').hasClass('rwdtop')) {
            let rwdtop = document.getElementsByClassName("rwdtop")[0];
            if (rwdtop.classList.contains("-rwdscroll")) {
                let right_height = document.getElementsByClassName("headerright")[0];
                right_height.style.height = "calc(100% - 85px - 50px)";
                right_height.style.bottom = "0";
            }
            html.style.overflowY = "hidden";
        }
    } else {

        html.style.overflowY = "scroll";
        let right_height = document.getElementsByClassName("headerright")[0];
        right_height.style.height = null;


    }
});

// height: calc(100% - 85px - 50px);

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

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}