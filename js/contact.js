let send = document.getElementById("sendbtn");
let gray_blocks = document.getElementById("grayblock");
let checkbtn = document.getElementById("checkbtn");
let closes = document.getElementById("click").getElementsByClassName("close")[0];
send.addEventListener("click", function() {
    gray_blocks.style.display = "block";
});

checkbtn.addEventListener("click", function() {
    gray_blocks.style.display = "none";
});
closes.addEventListener("click", function() {
    gray_blocks.style.display = "none";
});