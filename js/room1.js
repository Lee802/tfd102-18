var small_img = document.querySelectorAll("div.small")[0].getElementsByTagName("div");
var big_img = document.querySelectorAll("div.big")[0];
for (let i = 0; i < small_img.length; i++) {
    small_img[i].addEventListener("mouseover", function() {
        let img_src = small_img[i].getElementsByTagName("img")[0].src;

        big_img.getElementsByTagName("img")[0].src = img_src;

    });

    small_img[i].addEventListener("click", function() {
        big_img.click();
    });

}
var big_img_src;
big_img.addEventListener("click", function() {

    let big_view = document.querySelectorAll("div.imgPreview")[0];
    big_img_src = this.querySelectorAll("img")[0].src;
    big_view.getElementsByTagName("img")[0].src = big_img_src;
    big_view.style.display = "block";
    let big_img_view = document.getElementsByClassName("imgPreview")[0];
    big_img_view.classList.remove("-off");

});

let big_img_array = Array();
for (let o = 0; o < small_img.length; o++) {
    big_img_array.push(small_img[o].getElementsByTagName("img")[0].src);
}


document.addEventListener("click", function(event) {
    event.stopPropagation();
    if (event.target.classList.contains("close")) {
        let big_img_view = document.getElementsByClassName("imgPreview")[0];
        big_img_view.classList.add("-off");
    }

    if (event.target.classList.contains("left")) {
        let h = 0;
        let change_img = document.querySelectorAll("div.imgPreview")[0].getElementsByTagName("img")[0];

        for (let i = 0; i < big_img_array.length; i++) {

            if (big_img_src == big_img_array[i]) {
                h = i;
                big_img_src = big_img_array[h - 1];

                break;
            }

        }


        if (h != 0) {
            // console.log(big_img_src); //910963
            // change_img.src = big_img_src;
            change_img.setAttribute("src", big_img_src);


        } else {
            // change_img.src = big_img_array[big_img_array.length - 1];
            change_img.setAttribute("src", big_img_array[big_img_array.length - 1]);
            big_img_src = big_img_array[big_img_array.length - 1];

        }
    }



    if (event.target.classList.contains("right")) {
        let h = 0;

        let change_img = document.querySelectorAll("div.imgPreview")[0].getElementsByTagName("img")[0];

        for (let i = 0; i < big_img_array.length; i++) {

            if (big_img_src == big_img_array[i]) {
                h = i;
                if (h == (big_img_array.length - 1)) {
                    h = 0;
                    big_img_src = big_img_array[h];
                } else {

                    big_img_src = big_img_array[h + 1];
                }

                break;
            }

        }


        if (h != (big_img_array.length - 1)) {

            change_img.setAttribute("src", big_img_src);

        } else {
            change_img.setAttribute("src", big_img_array[0]);

        }
    }

});

let gray_view = document.querySelectorAll("div.imgPreview")[0];

gray_view.addEventListener("click", function(event) {
    if (!event.target.classList.contains("left") && !event.target.classList.contains("right") && !event.target.classList.contains("imgs_big_view")) {
        let big_img_view = document.getElementsByClassName("imgPreview")[0];
        big_img_view.classList.add("-off");
    }
});