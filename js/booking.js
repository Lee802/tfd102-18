let notnulls = sessionStorage.getItem("bignum");
if (notnulls == null) {
    var i = 1;
    var j = 0;
    var q = 0;
    var g = 0;
    var h = 0;
    sessionStorage.setItem("bignum", i);
    sessionStorage.setItem("chilnum", j);
}

let people_add = document.getElementById("peopleadd");
let people_noadd = document.getElementById("peoplenoadd");
let chli_add = document.getElementById("chliadd");
let chli_noadd = document.getElementById("chlinoadd");
let bignum = sessionStorage.getItem("bignum");
let chilnum = sessionStorage.getItem("chilnum");
let total = document.getElementsByClassName("borderspeoples")[0];
let textdefault = `<div class="bignum">` + bignum + `</div>`;
let childefault = `<div class="chilnum">` + chilnum + `</div>`;
let totaldefault = `<div class="people "> ` + bignum + ` 成人 , ` + chilnum + ` 小孩 </div>`;
people_noadd.insertAdjacentHTML("afterend", textdefault);
chli_noadd.insertAdjacentHTML("afterend", childefault);
total.insertAdjacentHTML("beforeend", totaldefault);



let message_default = `<p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">` + bignum + `成人 ,` + chilnum + `小孩</p>`;
let message_rightpeople = document.getElementsByClassName("rightpeople")[0];

message_rightpeople.insertAdjacentHTML("beforeend", message_default);

people_add.addEventListener("click", function() {
    i++;
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
        i--;
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
    if (chilnum > 0) {
        j--;
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
    j++;
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


        q++;
        sessionStorage.setItem("firstnum", q);
        sessionStorage.setItem("firstmoney", "3335");
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms firstrooms" >
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("firstrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "firstnoadd" && q > 0) {




        q--;
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("firstrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("firstrooms")[0].remove();
        }
    }





    if (event.target.getAttribute("id") == "secadd") {


        g++;
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms secrooms" >
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("secrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("secrooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "secnoadd" && g > 0) {




        g--;
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("secrooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("secrooms")[0].remove();
        }

    }






    if (event.target.getAttribute("id") == "threeadd") {


        h++;
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;

        console.log(event.target.parentNode);
        if (firstnum == 1) {

            totalroom.insertAdjacentHTML("beforeend", totalroom_text);
        } else if (firstnum > 1) {
            totalmoneys = first_money * firstnum;
            totalroom_text = `<div class="totalrooms threerooms" >
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("threerooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("threerooms")[0].remove();
        }


    } else if (event.target.getAttribute("id") == "threenoadd" && h > 0) {




        h--;
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
                        <p>標準雙人房-雙人床</p>
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
                                <p>TWD<a class="moneyscolor">` + totalmoneys.toLocaleString('en-US') + `</a></p >
                         </div>
                         </div>
                          </div>`;
            totalroom.getElementsByClassName("threerooms")[0].insertAdjacentHTML("afterend", totalroom_text);
            totalroom.getElementsByClassName("threerooms")[0].remove();
        }

    }



    checktotalroom();

});


function checktotalroom() {
    let gettotal = document.getElementsByClassName("totalroom")[0];
    let gettotals = document.getElementsByClassName("totalrooms");
    console.log(gettotal);
    if (gettotals.length > 1) {
        gettotal.classList.add("addcss");
        console.log("1");
    } else if (gettotals.length == 2) {
        gettotal.classList.remove("addcss");

        console.log("2");
    }

}