// var click_img = document.getElementsByTagName("div");
var click_img = document.querySelectorAll("div.griditem");
// console.log(click_img);
var click_div = document.querySelectorAll("div.imgPreview");

for (let i = 0; i < click_img.length; i++) {
    click_img[i].addEventListener("click", function() {
        let big_imgclass_list = [];
        let big_div = this.getElementsByTagName("div")[0];
        for (i = 0; i < this.classList.length; i++) {
            big_imgclass_list.push(this.classList[i]);
        }
        for (let i = 0; i < big_imgclass_list.length; i++) {
            if (big_imgclass_list[i] != "--big") {
                this.classList.add("--big");
                big_div.style.display = "block";
                let img_src = this.getElementsByTagName("img")[0].src;
                big_div.getElementsByTagName("img")[0].src = img_src;
            } else {
                this.classList.remove("--big");
                big_div.style.display = "none";
            }
        }
    });

}





// });
// for (let i = 1; i < (click_img.length - 1); i++) {

// }