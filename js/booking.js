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
document.addEventListener("DOMContentLoaded", function() {
    if (defaultsopen == false) {


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
                let totalmoney = totalmuch[i] * totalmuchmoney[i];
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
                                <p>x 1 晚</p>
                            </div>
                            <div class="mainnew">
                                <p>總價 </p>
                                <p>TWD <a class="moneyscolor">` + totalmoney.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
                if (totalmoney != 0 && totalmuch[i] != null) {
                    roomsborder.insertAdjacentHTML("beforeend", domtext1);
                }
            }
            // console.log(totalroom[i]);
        }

        checktotalroom();
        totalmoneys();
    }
});



if (notnulls == null) {
    var i = 1;
    var j = 0;
    var q = 0;
    var g = 0;
    var h = 0;
    sessionStorage.setItem("bignum", i);
    sessionStorage.setItem("chilnum", j);
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
        let totalmoneys = first_money * firstnum;

        let totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
        let totalmoneys = first_money * firstnum;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>豪華雙人房-雙床房</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
        let totalmoneys = first_money * firstnum;

        let totalroom_text = `<div class="totalrooms secrooms" >
                        <p>景觀雙人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms secrooms" >
                        <p>景觀雙人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
        let totalmoneys = first_money * firstnum;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("secrooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms secrooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
        let totalmoneys = first_money * firstnum;

        let totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
        let totalmoneys = first_money * firstnum;
        if (firstnum == 0) {
            totalroom.getElementsByClassName("threerooms")[0].remove();
        } else if (firstnum > 0) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms threerooms" >
                        <p>家庭四人房-雙人床</p>
                        <div class="leftandright">
                            <div class="mainnew">
                                <p>官網優惠價</p>
                                <p>x ` + firstnum + ` 間</p>
                            </div>
                            <div class="mainnew">
                                <p>TWD ` + first_money + `</p>
                                <p>x 1 晚</p>
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
    let totals = (first * first_money) + (sec * sec_money) + (three * three_money);
    sessionStorage.setItem("totalmoneys", totals);
    checktotalroom();
    if (event.target.classList.contains("add") || event.target.classList.contains("noadd")) {
        totalmoneys();
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
    let moneys = sessionStorage.getItem("totalmoneys");
    let totalmoney = document.getElementsByClassName("totalmoney")[0];
    let rightpeoplesborder = document.getElementsByClassName("rightpeople")[0];
    if (moneys != 0 && moneys != null) {
        let lastmoney = moneys * 0.8;
        let firstmoney = moneys * 0.2;
        let text = `<div class="leftandright">
                        <div class="mainnew">
                            <p>總價<a class="smallsize">(房價已包含稅金及其他費用)</p>
                            <p></a>TWD <a class="moneyscolor">${ moneys.toLocaleString('en-US')}</a></p>
                        </div>
                        <div class="mainnew">
                            <p>剩餘尾款<a class="smallsize">（請於現場付清）</a></p>
                            <p>TWD ${lastmoney.toLocaleString('en-US')}</p>
                        </div>
                        <div class="mainnew">
                            <p>付款金額<a class="smallsize">（訂金）</a></p>
                            <p>TWD <a class="red">${firstmoney.toLocaleString('en-US')}</a></p>
                        </div>
                <input type="button" value="下一步" onclick="location.href='./booking1.html'"></input>
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
}