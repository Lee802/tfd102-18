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

    let a = document.getElementById("move");
    a.appendChild(total_divs[0].cloneNode(true));
    total_divs_last = a.querySelectorAll("div");
    a.appendChild(total_divs[6].cloneNode(true));
    total_divs_last = a.querySelectorAll("div");
    a.appendChild(total_divs[7].cloneNode(true));
    total_divs_last = a.querySelectorAll("div");

});

let index = 3;
let g = 0;
let l = 0;
let right_offsetWidth = 0;
let left_offsetWidth = 0;

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("right")) {


        let move = document.getElementById("move");
        let move_div = move.querySelectorAll("div");
        index++;
        console.log(index);
        console.log(total_divs_last.length);
        // console.log(total_divs_last[index].getAttribute("data-img"));
        console.log(move_div[index].getAttribute("data-img"));

        if (index < total_divs_last.length && move_div[index].getAttribute("data-img") != 1) {
            right_offsetWidth += -total_divs_last[index].offsetWidth - 20;
            left_offsetWidth -= total_divs_last[index].offsetWidth + 20;
            console.log(right_offsetWidth);
            move.style.transition = "all .5s";
        } else if (right_offsetWidth <= 1600) {
            console.log("uns");
            right_offsetWidth = 0;
            left_offsetWidth = 0
            right_offsetWidth += 640;
            left_offsetWidth -= 640;
            index = 1;

        }

        setTimeout(() => {
            move.style.transition = null;
        }, 600);

        move.style.transform = `translate3d(${right_offsetWidth}px,0px,0px)`;



        // for (let i = 0; i < total_div.length; i++) {


        //     if (total_div[i].getAttribute("data-img") <= h) {
        //         if (i == h) {
        //             left_offsetWidth = total_div[i].offsetWidth;
        //         }
        //         total_div[i].classList.add("-nones");
        //         total_div[i].classList.remove("marginleft");
        //     }
        //     if (j < 4 && total_div[i].getAttribute("data-img") > h) {
        //         j++;
        //         if (total_div[i].classList.contains("-nones")) {
        //             total_div[i].classList.remove("-nones");
        //         }
        //     } else {
        //         total_div[i].classList.add("-nones");
        //         if (h == (total_div.length - 4)) {
        //             h = 0;
        //         }
        //     }
        // }

    }
    if (event.target.classList.contains("left")) {
        let total_div = document.getElementById("move").querySelectorAll("div");
        let move = document.getElementById("move");
        let j = 0;
        l++;
        left_offsetWidth += total_div[l].offsetWidth + 20;
        right_offsetWidth -= total_div[l].offsetWidth + 20;
        move.style.transform = `translate3d(${left_offsetWidth}px,0px,0px)`;

        // for (let i = 0; i < total_div.length; i++) {

        //     total_div[i].style.left = left_offsetWidth + "px";
        //     if (total_div[i].getAttribute("data-img") <= l) {
        //         if (i == l) {
        //             left_offsetWidth = total_div[i].offsetWidth;
        //         }
        //         total_div[i].classList.add("-nones");
        //         total_div[i].classList.remove("marginleft");
        //     }
        //     if (j < 4 && total_div[i].getAttribute("data-img") > h) {
        //         j++;
        //         if (total_div[i].classList.contains("-nones")) {
        //             total_div[i].classList.remove("-nones");
        //         }
        //     } else {
        //         total_div[i].classList.add("-nones");
        //         if (l == total_div.length) {
        //             l = 0;
        //         }
        //     }
        // }
    }












    /*if (event.target.classList.contains("right")) {
        let total_div = document.getElementById("imgborders").querySelectorAll("div");
        let j = 0;
        h++;
        let left_offsetWidth;
        for (let i = 0; i < total_div.length; i++) {
            if (i == h) {
                left_offsetWidth = total_div[i].offsetWidth;
            }

            console.log(left_offsetWidth);
            total_div[i].style.left = left_offsetWidth + "px";
            if (total_div[i].getAttribute("data-img") <= h) {
                if (i == h) {
                    left_offsetWidth = total_div[i].offsetWidth;
                }
                total_div[i].classList.add("-nones");
                total_div[i].classList.remove("marginleft");
            }
            if (j < 4 && total_div[i].getAttribute("data-img") > h) {
                j++;
                if (total_div[i].classList.contains("-nones")) {
                    total_div[i].classList.remove("-nones");
                }

                if (j == 1) {
                    total_div[i].classList.add("marginleft");
                } else if (j == 4) {
                    total_div[i].classList.add("mariginright");
                } else if (j == 3) {
                    total_div[i].classList.remove("mariginright");
                }
            } else {
                total_div[i].classList.add("-nones");
            }
        }
    }*/

});

// for (let i = 0; i < 5; i++) {
// 抬升 hoisting
//     console.log(i);
// }
// console.log(i);.targ