document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        loop();
    }, 100);
});

function loop() {
    let imgbord = document.getElementsByClassName("bannerimg")[0];
    let imgbord_len = imgbord.querySelectorAll("img");
    imgbord.classList.add("zoomin");
    let i = 0;
    setInterval(() => {
        if (i < imgbord_len.length) {

            imgbord_len[i].style.display = "none";
            imgbord.classList.remove("zoomin");
            if (i == (imgbord_len.length - 1)) {
                imgbord_len[0].style.display = "block";
            } else {
                imgbord_len[i + 1].style.display = "block";
            }
            setTimeout(() => {
                imgbord.classList.add("zoomin");
            }, 100);

            i++;
            console.log(i);
        } else {
            i = 0;
            return;
        }
    }, 9000);
    // return loop;

}