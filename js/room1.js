var small_img = document.querySelectorAll("div.small")[0].getElementsByTagName("div");
var big_img = document.querySelectorAll("div.big")[0];
for (let i = 0; i < small_img.length; i++) {
    small_img[i].addEventListener("mouseover", function() {
        let img_src = small_img[i].getElementsByTagName("img")[0].src;

        big_img.getElementsByTagName("img")[0].src = img_src;

    });

    small_img[i].addEventListener("click", function() {

        let img_src = small_img[i].getElementsByTagName("img")[0].src;
        big_img.getElementsByTagName("img")[0].src = img_src;


        let big_view = document.querySelectorAll("div.imgPreview")[0];

        big_view.getElementsByTagName("img")[0].src = img_src;
        big_view.style.display = "block";


    });

}

big_img.addEventListener("click", function() {

    let big_view = document.querySelectorAll("div.imgPreview")[0];
    let big_img_src = this.querySelectorAll("img")[0].src;
    big_view.getElementsByTagName("img")[0].src = big_img_src;
    big_view.style.display = "block";


});