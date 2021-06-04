var autoplay = true;
var autoplay_Delay = 5000; // ms
var autoplayId;
var intervalId;

var slider;
var slider_item_container;
var slider_items;
var indicator_container;

var slider_item_width;
var curIndex = 0;

window.onload = function() {
    initElement();
    initEvent();

    if (autoplay) {

        startAnimation(slider_item_container);

    }
}



function initElement() {
    slider = document.getElementById("slider");
    slider_items = slider.getElementsByTagName("li");
    slider_item_container = slider.getElementsByClassName("slieder-item-container")[0];
    indicator_container = slider.getElementsByClassName("indicator-container")[0];

    var firstItem = slider_items[0].cloneNode(true);
    slider_item_container.appendChild(firstItem);

    slider_item_width = slider_items[0].offsetWidth;
    // console.log(slider_items);
}

function initEvent() {

    slider.addEventListener("mouseout", function() {
        autoplay = true;
        startAnimation(slider_item_container);
    });

    var indicators = indicator_container.children;
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].setAttribute("index", i);
        indicators[i].addEventListener("click", function() {
            var index = parseInt(this.getAttribute("index"));
            next(index);
        });
    }

    var left_arrow = slider.getElementsByClassName("left-arrow")[0];
    var right_arrow = slider.getElementsByClassName("right-arrow")[0];
    left_arrow.addEventListener("click", function() {
        prev();
    });
    right_arrow.addEventListener("click", function() {
        next();
    });
}

function animate(element, target) {
    var step = 10;
    var time = 10;
    slider_item_width = slider_items[0].offsetWidth;
    var gap = (Math.abs(target - element.offsetLeft) / slider_item_width);
    // console.log(target + "target");
    // console.log(element.offsetLeft + "element.offsetLeft");
    // console.log(slider_item_width + "slider_item_width");
    if (gap > 1) {
        step = step * gap;
        time = time / gap;
    }

    if (element) {
        step = (element.offsetLeft > target) ? -step : step;

        clearInterval(intervalId);
        setCurrentActiveIndicator(curIndex);

        intervalId = setInterval(function() {
            if ((step < 0) && (Math.abs(element.offsetLeft + step) < Math.abs(target))) {
                element.style.left = element.offsetLeft + step + "px";
            } else {
                if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
                    element.style.left = element.offsetLeft + step + "px";
                } else {
                    clearInterval(intervalId);
                    intervalId = -1;
                    element.style.left = target + "px";
                    if (autoplay) {
                        startAnimation(element);
                    }
                }
            }
        }, time);
    }
}

function prev() {
    var element = slider_item_container;
    var li = element.children;
    curIndex = curIndex - 1;
    slider_item_width = slider_items[0].offsetWidth;
    if (curIndex < 0) {
        element.style.left = -((li.length - 1) * slider_item_width) + "px";
        curIndex = li.length - 2;
    }
    animate(element, -(curIndex * slider_item_width));
}

function next(nextIndex) {
    var element = slider_item_container;
    var li = element.children;
    if ((nextIndex != null) && (typeof(nextIndex) != "undefined")) {
        curIndex = nextIndex; // nextIndex索引
    } else {
        curIndex = curIndex + 1;
        if (curIndex > (li.length - 1)) {
            element.style.left = 0 + "px";
            curIndex = 1;
        }
    }
    slider_item_width = slider_items[0].offsetWidth;
    animate(element, -(curIndex * slider_item_width));
}

function startAnimation(element) {
    if (autoplayId) {
        clearTimeout(autoplayId);
    }
    autoplayId = setTimeout(function() {
        next();
    }, autoplay_Delay);
}

function setCurrentActiveIndicator(index) {
    var indicators = indicator_container.children;
    if (index == indicators.length) {
        index = 0;
    }
    for (var i = 0; i < indicators.length; i++) {
        if (i == index) {
            indicators[i].className = "indicator active";
        } else {
            indicators[i].className = "indicator";
        }
    }
}

// window.addEventListener("resize", function() {
//     let a = document.getElementsByClassName("slieder-item-container ")[0].getElementsByTagName("img");

//     for (let i = 0; i < a.length; i++) {
//         a[i].style.width = "100%";
//     }

// });
var total_divs_last;
let move = document.getElementById("move");
let index = 3;
let g = 0;
let l = 0;
let a = document.getElementById("move");
total_divs_last = a.querySelectorAll("div");
let right_offsetWidth = -total_divs_last[4].offsetWidth - 20;

document.addEventListener("DOMContentLoaded", function() {
    let total_div = document.getElementById("imgborders").querySelectorAll("div");
    let j = 0;
    for (let i = 0; i < total_div.length; i++) {
        if (!total_div[i].classList.contains("nones") && j < 4) {
            j++;

        } else {
            total_div[i].classList.add("-nones");
        }
    }
    let width_border = document.getElementById("move");
    let offwidth = width_border.querySelectorAll("div").length * 100;
    width_border.style.width = `${offwidth}%`;
    let total_divs = document.getElementById("move").querySelectorAll("div");


    a.prepend(total_divs[total_divs.length - 1].cloneNode(true));

    // a.prepend(`<div>123</div>`);
    move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;

});

let o = 0;
let moves = 0;
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("right")) {
        o++;
        let total = a.getElementsByTagName("div");
        // right_offsetWidth = -total_divs_last[4].offsetWidth - 20;
        right_offsetWidth += -total[4].offsetWidth - 20;
        console.log(total[4].offsetWidth + 20);
        move.style.transition = "all .5s";
        move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;

        setTimeout(() => {
            move.style.transition = null;
            right_offsetWidth -= (-total[4].offsetWidth - 20);
            total[0].remove();

            a.appendChild(a.getElementsByTagName("div")[0].cloneNode(true));
            move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;

        }, 600);


    }

    if (event.target.classList.contains("left")) {


        let total = a.getElementsByTagName("div");

        right_offsetWidth += total[0].offsetWidth + 20;
        move.style.transition = "all .5s";
        move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;
        setTimeout(() => {
            move.style.transition = null;
            total[total.length - 1].remove();
            right_offsetWidth -= total[4].offsetWidth + 20;
            a.prepend(total[total.length - 1].cloneNode(true));
            move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;
        }, 600);


    }

});

window.addEventListener("resize", function() {
    right_offsetWidth = -total_divs_last[4].offsetWidth - 20;
    let width_border = document.getElementById("move");
    let offwidth = width_border.querySelectorAll("div").length * 100;
    // console.log(window.innerWidth);
    if (window.innerWidth > 1200) {

        let div_width = document.getElementById("move");
        // div_width.style.transform = `translate3d(-${right_offsetWidth}px,0px,0px)`;
        div_width.setAttribute("style", `transform: translate3d(${right_offsetWidth}px,0px,0px) ; width:${offwidth}%;`)

    }
    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
        let div_width = document.getElementById("move");

        // div_width.style.transform = `translate3d(-${right_offsetWidth}px,0px,0px)`;
        div_width.setAttribute("style", `transform: translate3d(${right_offsetWidth}px,0px,0px) ; width:${offwidth}%;`);

    }
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        let div_width = document.getElementById("move");
        // div_width.style.transform = `translate3d(-${right_offsetWidth}px,0px,0px)`;
        div_width.setAttribute("style", `transform: translate3d(${right_offsetWidth}px,0px,0px) ; width:${offwidth}%;`);

    }
    if (window.innerWidth > 575 && window.innerWidth <= 767) {
        let div_width = document.getElementById("move");
        // div_width.style.transform = `translate3d(-${right_offsetWidth}px,0px,0px)`;
        div_width.setAttribute("style", `transform: translate3d(${right_offsetWidth}px,0px,0px) ; width:${offwidth}%;`);

    }
    if (window.innerWidth <= 575) {
        let div_width = document.getElementById("move");
        // div_width.style.transform = `translate3d(-${right_offsetWidth}px,0px,0px)`;
        div_width.setAttribute("style", `transform: translate3d(${right_offsetWidth}px,0px,0px) ; width:${offwidth}%;`);

    }
    if (window.innerWidth > 0) {
        slider_item_width = Math.abs(slider_items[0].offsetWidth);

        let indicator_container_1 = document.getElementsByClassName("active")[0].getAttribute("index");
        // console.log(indicator_container_1);
        let slieder_item_container = document.getElementsByClassName("slieder-item-container")[0];
        slieder_item_container.setAttribute("style", `left:  -${slider_item_width * indicator_container_1}px;`);
    }
});


//1100 260
// for (let i = 0; i < 5; i++) {
// 抬升 hoisting
//     console.log(i);
// }
// console.log(i);.targ