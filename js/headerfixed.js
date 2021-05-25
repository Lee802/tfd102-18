

var hiddenheader = document.getElementsByClassName("hiddenheader")[0];

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 85) {          /* 要滑動到選單的距離 */
            $(hiddenheader).addClass('navFixed');   /* 幫選單加上固定效果 */
        } else {
            $(hiddenheader).removeClass('navFixed'); /* 移除選單固定效果 */
        }
    });
});