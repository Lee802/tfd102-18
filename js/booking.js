let notnulls = sessionStorage.getItem("bignum");
let people_add = document.getElementById("peopleadd");
let people_noadd = document.getElementById("peoplenoadd");
let chli_add = document.getElementById("chliadd");
let chli_noadd = document.getElementById("chlinoadd");
let bignum;
let chilnum;
let total = document.getElementsByClassName("borderspeoples")[0];
let textdefault;
let childefault;
let totaldefault;
let message_default;
let message_rightpeople;
let defaultsopen = false;
let deafault_room;
let getadd = document.getElementsByClassName("add");
// console.log(getadd.length);
var q = JSON.parse(sessionStorage.getItem("firstnum"));
var g = JSON.parse(sessionStorage.getItem("secnum"));
var h = JSON.parse(sessionStorage.getItem("threenum"));
let dates = document.getElementsByClassName("form-control")[0];
let today = new Date();
let years = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
var next_btn;
let days;
if (JSON.stringify(day) < 10) {

    if (day != 9) {
        days = "0" + (day + 1);
    } else {
        days = day + 1;
    }
    day = "0" + day;

    // console.log(day);
}
if (JSON.stringify(month) < 10) {
    month = "0" + month;
    // console.log(month);
}

function right_dates() {
    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");
    let right_dates = document.getElementById("right_dates");
    let new_start = new Date(start_dates);
    let new_end = new Date(end_dates);
    let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;
    let right_dates_text = `<p class="date"><img src="./img/smallicon/date.png" alt="" class="messageicon">${start_dates} - ${end_dates}  ( ${night + 1} 天 ${night} 晚)</p>`;

    right_dates.insertAdjacentHTML("afterbegin", right_dates_text);
}


document.addEventListener("DOMContentLoaded", function() {

    right_dates();


    if (defaultsopen == false) {

        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;
        let sess_totalmoney = 0;

        dates.setAttribute("value", `${start_dates} - ${end_dates} `);
        bignum = sessionStorage.getItem("bignum");
        chilnum = sessionStorage.getItem("chilnum");


        textdefault = `<div class="bignum">` + bignum + `</div>`;
        childefault = `<div class="chilnum">` + chilnum + `</div>`;
        totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
        message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;
        people_noadd.insertAdjacentHTML("afterend", textdefault);
        chli_noadd.insertAdjacentHTML("afterend", childefault);
        total.insertAdjacentHTML("beforeend", totaldefault);

        message_rightpeople = document.getElementsByClassName("rightpeople")[0];
        message_rightpeople.insertAdjacentHTML("beforeend", message_default);
        let totalroom = document.getElementsByClassName("addnum");
        let text_remove = document.getElementsByClassName("num");
        let totalmuch = Array(sessionStorage.getItem("firstnum"), sessionStorage.getItem("secnum"), sessionStorage.getItem("threenum"), 0, 0, 0);
        let totalmuchmoney = Array(sessionStorage.getItem("firstmoney"), sessionStorage.getItem("secmoney"), sessionStorage.getItem("threemoney"), 0, 0, 0);
        let div_class = Array("firstrooms", "secrooms", "threerooms", 0, 0, 0);
        let name = Array("豪華雙人房-雙床房", "景觀雙人房-雙床房", "家庭四人房-雙床房", 0, 0, 0);
        for (let i = 0; i < getadd.length; i++) {
            deafault_room = `<div class="num">` + totalmuch[i] + `</div>`;
            let removes_ = text_remove[i];
            if (removes_ != null) {
                removes_.remove();
                if (totalmuch[i] != null) {
                    totalroom[i].insertAdjacentHTML("beforeend", deafault_room);
                } else {
                    deafault_room = `<div class="num"> 0 </div>`;
                    totalroom[i].insertAdjacentHTML("beforeend", deafault_room);
                }
                let totalmoney = totalmuch[i] * totalmuchmoney[i] * night;
                let roomsborder = document.getElementsByClassName("totalroom")[0];
                let domtext1 = `<div class="totalrooms ${div_class[i]}" >
                        <p>${name[i]}</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + totalmuch[i] + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + totalmuchmoney[i] + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoney.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
                if (totalmoney != 0 && totalmuch[i] != null) {
                    roomsborder.insertAdjacentHTML("beforeend", domtext1);
                    sess_totalmoney += totalmoney;
                }
            }
            // console.log(totalroom[i]);
        }
        sessionStorage.setItem("totalmoneys", sess_totalmoney);
        checktotalroom();
        totalmoneys();
        rwddate();

    }

});

function change_date() {
    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");
    let new_start = new Date(start_dates);
    let new_end = new Date(end_dates);
    let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;
    let totalroom = document.getElementsByClassName("addnum");
    let text_remove = document.getElementsByClassName("num");
    let totalmuch = Array(sessionStorage.getItem("firstnum"), sessionStorage.getItem("secnum"), sessionStorage.getItem("threenum"), 0, 0, 0);
    let totalmuchmoney = Array(sessionStorage.getItem("firstmoney"), sessionStorage.getItem("secmoney"), sessionStorage.getItem("threemoney"), 0, 0, 0);
    let div_class = Array("firstrooms", "secrooms", "threerooms", 0, 0, 0);
    let name = Array("豪華雙人房-雙床房", "景觀雙人房-雙床房", "家庭四人房-雙床房", 0, 0, 0);
    let roomsborder_del = document.getElementsByClassName("totalroom")[0].querySelectorAll("div");
    for (let i = 0; i < roomsborder_del.length; i++) {
        roomsborder_del[i].remove();
    }
    let sess_totalmoney = 0;
    for (let i = 0; i < getadd.length; i++) {
        deafault_room = `<div class="num">` + totalmuch[i] + `</div>`;
        let removes_ = text_remove[i];
        if (removes_ != null) {

            removes_.remove();
            if (totalmuch[i] != null) {
                totalroom[i].insertAdjacentHTML("beforeend", deafault_room);
            } else {
                deafault_room = `<div class="num"> 0 </div>`;
                totalroom[i].insertAdjacentHTML("beforeend", deafault_room);
            }
            let totalmoney = totalmuch[i] * totalmuchmoney[i] * night;
            let roomsborder = document.getElementsByClassName("totalroom")[0];
            let domtext1 = `<div class="totalrooms ${div_class[i]}" >
                        <p>${name[i]}</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + totalmuch[i] + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + totalmuchmoney[i] + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoney.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            if (totalmoney != 0 && totalmuch[i] != null) {
                roomsborder.insertAdjacentHTML("beforeend", domtext1);
                sess_totalmoney += totalmoney;

            }
        }
    }
    sessionStorage.setItem("totalmoneys", sess_totalmoney);
    totalmoneys();
}


if (notnulls == null) {
    var i = 1;
    var j = 0;
    var q = 0;
    var g = 0;
    var h = 0;
    sessionStorage.setItem("bignum", i);
    sessionStorage.setItem("chilnum", j);
    sessionStorage.setItem("startdate", `${years}/${month}/${day} `);
    sessionStorage.setItem("enddate", `${years}/${month}/${days} `);
    bignum = sessionStorage.getItem("bignum");
    chilnum = sessionStorage.getItem("chilnum");
    textdefault = `<div class="bignum">` + bignum + `</div>`;
    childefault = `<div class="chilnum">` + chilnum + `</div>`;
    totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
    message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;

    people_noadd.insertAdjacentHTML("afterend", textdefault);
    chli_noadd.insertAdjacentHTML("afterend", childefault);
    total.insertAdjacentHTML("beforeend", totaldefault);
    message_rightpeople = document.getElementsByClassName("rightpeople")[0];
    message_rightpeople.insertAdjacentHTML("beforeend", message_default);
    defaultsopen = true;

    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");

    dates.setAttribute("value", `${start_dates} - ${end_dates} `);
}


people_add.addEventListener("click", function() {
    i = JSON.parse(sessionStorage.getItem("bignum")) + 1;
    sessionStorage.setItem("bignum", i);
    bignum = sessionStorage.getItem("bignum");
    textdefault = `<div class="bignum">` +
        bignum +
        `</div>`;

    let num = document.getElementsByClassName("big")[0].getElementsByClassName("bignum")[0];
    let num__ = document.getElementsByClassName("peopleborder")[0].getElementsByClassName("people")[0];
    let message_people = document.getElementsByClassName("people")[1];

    totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
    message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;

    num.remove();
    num__.remove();
    message_people.remove();
    people_noadd.insertAdjacentHTML("afterend", textdefault);
    total.insertAdjacentHTML("beforeend", totaldefault);
    message_rightpeople.insertAdjacentHTML("beforeend", message_default);
});



people_noadd.addEventListener("click", function() {
    bignum = sessionStorage.getItem("bignum");
    if (bignum != 1) {
        i = JSON.parse(sessionStorage.getItem("bignum")) - 1;
        sessionStorage.setItem("bignum", i);
        bignum = sessionStorage.getItem("bignum");
        textdefault = `<div class="bignum">` + bignum + `</div>`;
        let num = document.getElementsByClassName("big")[0].getElementsByClassName("bignum")[0];
        let num__ = document.getElementsByClassName("peopleborder")[0].getElementsByClassName("people")[0];
        let message_people = document.getElementsByClassName("people")[1];
        totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
        message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;
        num.remove();
        num__.remove();
        message_people.remove();
        people_noadd.insertAdjacentHTML("afterend", textdefault);
        total.insertAdjacentHTML("beforeend", totaldefault);
        message_rightpeople.insertAdjacentHTML("beforeend", message_default);
    }

});


chli_noadd.addEventListener("click", function() {
    chilnum = sessionStorage.getItem("chilnum");
    if (chilnum != 0) {
        j = JSON.parse(sessionStorage.getItem("chilnum")) - 1;
        sessionStorage.setItem("chilnum", j);
        chilnum = sessionStorage.getItem("chilnum");
        childefault = `<div class="chilnum">` + chilnum + `</div>`;
        let num = document.getElementsByClassName("chli")[0].getElementsByClassName("chilnum")[0];
        let num__ = document.getElementsByClassName("peopleborder")[0].getElementsByClassName("people")[0];
        let message_people = document.getElementsByClassName("people")[1];

        totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
        message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;

        num.remove();
        num__.remove();
        message_people.remove();

        chli_noadd.insertAdjacentHTML("afterend", childefault);
        total.insertAdjacentHTML("beforeend", totaldefault);
        message_rightpeople.insertAdjacentHTML("beforeend", message_default);

    }
});

chli_add.addEventListener("click", function() {
    j = JSON.parse(sessionStorage.getItem("chilnum")) + 1;
    sessionStorage.setItem("chilnum", j);
    chilnum = sessionStorage.getItem("chilnum");
    childefault = `<div class="chilnum">` + chilnum + `</div>`;
    let num = document.getElementsByClassName("chli")[0].getElementsByClassName("chilnum")[0];
    let num__ = document.getElementsByClassName("peopleborder")[0].getElementsByClassName("people")[0];
    let message_people = document.getElementsByClassName("people")[1];

    totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
    message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;

    num.remove();
    num__.remove();
    message_people.remove();

    chli_noadd.insertAdjacentHTML("afterend", childefault);
    total.insertAdjacentHTML("beforeend", totaldefault);
    message_rightpeople.insertAdjacentHTML("beforeend", message_default);

});




let people_border = document.querySelectorAll("div.people")[0];


document.addEventListener("click", function(event) {
    // console.log(event.target);
    let people_hide = document.querySelectorAll("div.peoplehide")[0];
    if (event.target.classList.contains("people")) {
        let people_border_class_list = [];


        for (i = 0; i < people_hide.classList.length; i++) {
            people_border_class_list.push(people_hide.classList[i]);
        }
        for (let i = 0; i < people_border_class_list.length; i++) {
            if (people_border_class_list[i] != "-on") {
                people_hide.classList.add("-on");
            } else {
                people_hide.classList.remove("-on");
            }
        }

    } else if (!event.target.classList.contains("big") && !event.target.classList.contains("chli") && !event.target.classList.contains("chilnum") && !event.target.classList.contains("bignum") &&
        event.target.getAttribute("id") != "peopleadd" && event.target.getAttribute("id") != "peopleadd" &&
        event.target.getAttribute("id") != "peoplenoadd" && event.target.getAttribute("id") != "chlinoadd" &&
        event.target.getAttribute("id") != "chliadd") {
        people_hide.classList.remove("-on");

    }
    if (event.target.getAttribute("id") == "firstadd") {
        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;

        q = JSON.parse(sessionStorage.getItem("firstnum")) + 1;
        sessionStorage.setItem("firstnum", q);
        sessionStorage.setItem("firstmoney", "3330");
        let firstnum = sessionStorage.getItem("firstnum");
        let first_money = sessionStorage.getItem("firstmoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();
        add_num.insertAdjacentHTML("beforeend", text);


        let totalroom = document.getElementsByClassName("totalroom")[0];
        let totalmoneys = first_money * firstnum * night;

        let totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        // console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            // console.log(totalroom);
            totalroom.getElementsByClassName("firstrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "firstnoadd" && q > 0) {

        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;

        q = JSON.parse(sessionStorage.getItem("firstnum")) - 1;;
        sessionStorage.setItem("firstnum", q);
        let firstnum = sessionStorage.getItem("firstnum");
        let first_money = sessionStorage.getItem("firstmoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let totalroom = document.getElementsByClassName("totalroom")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();

        add_num.insertAdjacentHTML("beforeend", text);
        let totalmoneys = first_money * firstnum * night;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("firstrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        }
    }





    if (event.target.getAttribute("id") == "secadd") {

        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;


        g = JSON.parse(sessionStorage.getItem("secnum")) + 1;
        sessionStorage.setItem("secnum", g);
        sessionStorage.setItem("secmoney", "2990");
        let firstnum = sessionStorage.getItem("secnum");
        let first_money = sessionStorage.getItem("secmoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();
        add_num.insertAdjacentHTML("beforeend", text);


        let totalroom = document.getElementsByClassName("totalroom")[0];
        let totalmoneys = first_money * firstnum * night;

        let totalroom_text = `<div class="totalrooms secrooms" >
                        <p>景觀雙人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        // console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms secrooms" >
                        <p>景觀雙人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("secrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("secrooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "secnoadd" && g > 0) {
        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;


        g = JSON.parse(sessionStorage.getItem("secnum")) - 1;
        sessionStorage.setItem("secnum", g);
        let firstnum = sessionStorage.getItem("secnum");
        let first_money = sessionStorage.getItem("secmoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let totalroom = document.getElementsByClassName("totalroom")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();

        add_num.insertAdjacentHTML("beforeend", text);
        let totalmoneys = first_money * firstnum * night;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("secrooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms secrooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("secrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("secrooms")[0].remove();
        }

    }






    if (event.target.getAttribute("id") == "threeadd") {
        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;

        h = JSON.parse(sessionStorage.getItem("threenum")) + 1;
        sessionStorage.setItem("threenum", h);
        sessionStorage.setItem("threemoney", "4000");
        let firstnum = sessionStorage.getItem("threenum");
        let first_money = sessionStorage.getItem("threemoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();
        add_num.insertAdjacentHTML("beforeend", text);


        let totalroom = document.getElementsByClassName("totalroom")[0];
        let totalmoneys = first_money * firstnum * night;

        let totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        // console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

            totalroom.getElementsByClassName("threerooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("threerooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "threenoadd" && h > 0) {
        let start_dates = sessionStorage.getItem("startdate");
        let end_dates = sessionStorage.getItem("enddate");
        let new_start = new Date(start_dates);
        let new_end = new Date(end_dates);
        let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;



        h = JSON.parse(sessionStorage.getItem("threenum")) - 1;
        sessionStorage.setItem("threenum", h);
        let firstnum = sessionStorage.getItem("threenum");
        let first_money = sessionStorage.getItem("threemoney");
        let text_remove = event.target.parentNode.getElementsByClassName("num")[0];
        let add_num = event.target.parentNode.getElementsByClassName("addnum")[0];
        let totalroom = document.getElementsByClassName("totalroom")[0];
        let text = `<div class="num">` + firstnum + `</div>`;
        text_remove.remove();

        add_num.insertAdjacentHTML("beforeend", text);
        let totalmoneys = first_money * firstnum * night;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("threerooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum * night;
            totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x ${night} 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("threerooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("threerooms")[0].remove();
        }

    }
    let first = sessionStorage.getItem("firstnum");
    let first_money = sessionStorage.getItem("firstmoney");
    let sec = sessionStorage.getItem("secnum");
    let sec_money = sessionStorage.getItem("secmoney");
    let three = sessionStorage.getItem("threenum");
    let three_money = sessionStorage.getItem("threemoney");
    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");
    let new_start = new Date(start_dates);
    let new_end = new Date(end_dates);
    let now_date = new Date(`${years}/${month}/${day}`);
    let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;
    let totals = (first * first_money * night) + (sec * sec_money * night) + (three * three_money * night);
    sessionStorage.setItem("totalmoneys", totals);
    checktotalroom();
    if (event.target.classList.contains("add") || event.target.classList.contains("noadd")) {
        totalmoneys();
    }

    if (event.target.getAttribute("id") == "next_btn") {
        let start_dates = sessionStorage.getItem("startdate");
        let new_start = new Date(start_dates);
        let start_math = Math.abs(new_start) - now_date;

        if (start_math >= 0) {
            window.location.href = "./booking1.html";

        } else {
            alert("開始日期不能為過去時間。");
        }
    }
    if (event.target.getAttribute("class") == "close") {

        let clicki = document.getElementsByClassName("clicki")[0];
        clicki.style.display = "none";
        clicki.getElementsByClassName("message")[0].remove();
    }

});


function checktotalroom() {
    let gettotal = document.getElementsByClassName("totalroom")[0];
    let gettotals = document.getElementsByClassName("totalrooms");
    let rightpeoplesborder = document.getElementsByClassName("rightpeople")[0];
    if (gettotals.length > 1) {
        gettotal.classList.add("addcss");

        // console.log("1");
    } else if (gettotals.length == 2) {
        gettotal.classList.remove("addcss");
        // console.log("2");
        rightpeoplesborder.classList.remove("borderadd");
    }

}
let openmoneys = true;

function totalmoneys() {
    let moneys = JSON.parse(sessionStorage.getItem("totalmoneys"));
    let totalmoney = document.getElementsByClassName("totalmoney")[0];
    let rightpeoplesborder = document.getElementsByClassName("rightpeople")[0];
    if (moneys != 0 && moneys != null) {
        let lastmoney = moneys * 0.8;
        let firstmoney = moneys * 0.2;
        let text = `<div class="leftandright" id = "leftandright">
                        <div class="mainnew">
                            <p>總價<a class="smallsize"></p>
                            <p></a>TWD <a class="moneyscolor">${ moneys.toLocaleString('en-US')}</a></p>
                        </div>
                        <div class="mainnew">
                            <p>剩餘尾款<a class="smallsize">（請於現場付清）</a></p>
                            <p>TWD ${lastmoney.toLocaleString()}</p>
                        </div>
                        <div class="mainnew">
                            <p>付款金額<a class="smallsize">（訂金）</a></p>
                            <p>TWD <a class="red">${firstmoney.toLocaleString('en-US')}</a></p>
                        </div>
                <input type="button" value="下一步" id="next_btn"></input>
                    </div>
                    `;

        let gettotals = document.getElementsByClassName("totalrooms");
        if (openmoneys) {
            totalmoney.insertAdjacentHTML("afterbegin", text);
            totalmoney.classList.add("-border");
            openmoneys = false;
            rightpeoplesborder.classList.add("borderadd");
        } else if (gettotals.length > 0) {
            totalmoney.getElementsByClassName("leftandright")[0].remove();
            totalmoney.insertAdjacentHTML("afterbegin", text);
        } else {
            totalmoney.getElementsByClassName("leftandright")[0].remove();
            totalmoney.classList.remove("-border");
            rightpeoplesborder.classList.remove("borderadd");
            openmoneys = true;
        }
    } else {
        if (!openmoneys) {
            totalmoney.getElementsByClassName("leftandright")[0].remove();
            totalmoney.classList.remove("-border");
            rightpeoplesborder.classList.remove("borderadd");
            openmoneys = true;
        }
    }
    // next_btn = document.getElementById("next_btn");
}

function rwddate() {
    let text_pos = document.getElementsByClassName("rwdtop")[0];

    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");
    let bignum = sessionStorage.getItem("bignum");
    let chlinum = sessionStorage.getItem("chilnum");
    let text = ` <div id="datesssss">
                <a>${start_dates} - ${end_dates} </a>
            </div>
            <div id="peoplesssss">
                <a> ${bignum} 成人 , ${chlinum} 小孩</a>
            </div>`;
    console.log(text_pos.children);
    if (text_pos.children != null) {
        for (let i = 0; i < text_pos.children.length; i++) {
            text_pos.children[i].remove();
        }
        text_pos.insertAdjacentHTML("afterbegin", text);
    } else {
        text_pos.insertAdjacentHTML("afterbegin", text);
    }
    text_pos.insertAdjacentHTML("afterbegin", text);
}



$(function() {

    $('input[name="daterange"]').daterangepicker({
        autoUpdateInput: false,

        startDate: `${month}/${day}/${years}`,
        endDate: `${month}/${day + 1}/${years}`
    });
    $('input[name="daterange"]').data('daterangepicker').setStartDate(`${month}/${ day }/${years}`);
    $('input[name="daterange"]').data('daterangepicker').setEndDate(`${month}/${day +1}/${years}`);
    $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {

        $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
        sessionStorage.setItem("startdate", `${picker.startDate.format('YYYY/MM/DD')}`);
        sessionStorage.setItem("enddate", `${picker.endDate.format('YYYY/MM/DD')}`);
        let right_del_dates = document.getElementById("right_dates").getElementsByClassName("date")[0];
        right_del_dates.remove();
        right_dates();
        change_date();
        rwddate();
    });

    $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
        // $(this).val('');
    });

});

var rwdtop = document.getElementsByClassName("rwdtop")[0];
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 665) { /* 要滑動到選單的距離 */
            if (window.innerWidth <= 767) {
                $(rwdtop).addClass('-rwdscroll'); /* 幫選單加上固定效果 */
            }
        } else {
            if (window.innerWidth <= 767) {
                $(rwdtop).removeClass('-rwdscroll'); /* 移除選單固定效果 */
            }
        }
    });
});

window.addEventListener("resize", function() {

    if (window.innerWidth > 767) {
        rwdtop.classList.remove("-rwdscroll");
    }

});


let rwd_button = document.getElementsByClassName("rwdtotal")[0].querySelector("button");
rwd_button.addEventListener("click", function() {

    let clicki = document.getElementsByClassName("clicki")[0];
    // console.log(message_length);
    // if (message_length != 0) {


    let message = document.getElementsByClassName("message")[0];
    let text = `<div class="close"></div>`;
    clicki.insertAdjacentHTML("beforeend", message.outerHTML);
    clicki.style.display = "block";
    clicki.getElementsByClassName("rightpeople")[0].remove();
    clicki.getElementsByClassName("totalmoney ")[0].querySelector("input").remove();
    let text_pos = clicki.getElementsByClassName("message")[0];
    text_pos.insertAdjacentHTML("afterbegin", text);
    // } else {
    //     let message = document.getElementsByClassName("message")[0];

    //     let text = `<div class="close"></div>`;
    //     clicki.insertAdjacentHTML("beforeend", message.outerHTML);
    //     clicki.style.display = "block";
    //     clicki.getElementsByClassName("rightpeople")[0].remove();
    //     clicki.getElementsByClassName("totalmoney ")[0].querySelector("input").remove();
    //     let text_pos = clicki.getElementsByClassName("message")[0];
    //     text_pos.insertAdjacentHTML("afterbegin", text);
    // }
});








// asdf