document.addEventListener("DOMContentLoaded", function() {

    let start_dates = sessionStorage.getItem("startdate");
    let end_dates = sessionStorage.getItem("enddate");
    let new_start = new Date(start_dates);
    let new_end = new Date(end_dates);
    let night = Math.abs(new_end - new_start) / 60 / 60 / 24 / 1000;



    let dates_text = `<p class="date"><img src="./img/smallicon/date.png" alt="" class="messageicon">${start_dates} - ${end_dates} ( ${night+1} 天 ${night} 夜)</p>`;
    let dates_add = document.getElementById("insertdates");
    dates_add.insertAdjacentHTML("afterbegin", dates_text);

    let peoples_text = `  <p class="people"><img src="./img/smallicon/people.jpg" alt="" class="messageicon">${sessionStorage.getItem("bignum")} 成人 , ${sessionStorage.getItem("chilnum")} 小孩</p>`;
    let people_add = document.getElementsByClassName("dates")[0];
    people_add.insertAdjacentHTML("beforeend", peoples_text);



    let moneys = JSON.parse(sessionStorage.getItem("totalmoneys"));
    let lastmoney = moneys * 0.8;
    let firstmoney = moneys * 0.2;

    let total_text = `<div class="roomtotalsmoney">
                        <p>房費 <a class="smallsize">(房價已包含稅金及其他費用)</a></p>
                        <p>TWD ${moneys.toLocaleString('en-US')}</p>
                    </div>
                    <div class="roomtotalsmoney bottomline">
                        <p>總價</p>
                        <p class="blue">TWD ${moneys.toLocaleString('en-US')}</p>
                    </div>
                    <div class="roomtotalsmoney">
                        <p>付款金額<a class="smallsize">（ 訂金 30% ）</a></p>
                        <p>TWD <a class="moneyscolor">${firstmoney.toLocaleString('en-US')}</a></p>
                    </div>
                    <div class="roomtotalsmoney">
                        <p>剩餘尾款<a class="smallsize">（ 請於現場付清 ）</a></p>
                        <p>TWD ${lastmoney.toLocaleString('en-US')}</p>
                    </div>`;
    let total_add = document.getElementsByClassName("moneytotalsandpays")[0];
    total_add.insertAdjacentHTML("afterbegin", total_text);
    let first_num = JSON.parse(sessionStorage.getItem("firstnum"));
    let sec_num = JSON.parse(sessionStorage.getItem("secnum"));
    let three_num = JSON.parse(sessionStorage.getItem("threenum"));
    let first_money = JSON.parse(sessionStorage.getItem("firstmoney"));
    let sec_money = JSON.parse(sessionStorage.getItem("secmoney"));
    let three_money = JSON.parse(sessionStorage.getItem("threemoney"));


    let text_pos = document.getElementsByClassName("moneyitems")[0];
    // console.log(text_pos);
    if (first_num > 0) {

        let first_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/09-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">標準雙人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${first_money.toLocaleString('en-US')}</p>
                        <p>x ${first_num} 間</p>
                        <p>x ${night} 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${(first_money * first_num * night).toLocaleString('en-US')}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;

        text_pos.insertAdjacentHTML("beforeend", first_text);
    }

    if (sec_num > 0) {
        let sec_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/leonardo-2091747-tpesh-king-0584-hor-clsc_O-610221-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">景觀雙人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${sec_money.toLocaleString('en-US')}</p>
                        <p>x ${sec_num} 間</p>
                        <p>x ${night} 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${(sec_money * sec_num * night).toLocaleString('en-US')}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;


        text_pos.insertAdjacentHTML("beforeend", sec_text);
    }

    if (three_num > 0) {
        let three_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/TKUO-Vol3-1920-0030-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">家庭四人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${three_money.toLocaleString('en-US')}</p>
                        <p>x ${three_num} 間</p>
                        <p>x ${night} 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${(three_money * three_num * night).toLocaleString('en-US')}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;


        text_pos.insertAdjacentHTML("beforeend", three_text);
    }

    if ((first_num < 1 && sec_num < 1) || (sec_num < 1 && three_num < 1) || (three_num < 1 && first_num < 1)) {
        // let nones = document.getElementsByClassName("roomborders")[0];
        // let after = window.getComputedStyle(nones, "::after");
        // let c = nones.sheet;
        // console.log(after);

        document.styleSheets[0].insertRule('.roomborders::after { display:none }', 0);
    }

});

let send_btn = document.getElementById("sendbtn");
let check_box = document.getElementById("Terms");
send_btn.addEventListener("click", function() {
    if (check_box.checked) {
        let send_data = true;
        let getname = document.getElementsByClassName("name")[0];
        if (getname.value == "") {
            getname.classList.add("-error");
            send_data = false;
        } else {
            getname.classList.remove("-error");
        }
        let getnames = document.getElementsByClassName("names")[0];
        if (getnames.value == "") {
            getnames.classList.add("-error");
            send_data = false;
        } else {
            getnames.classList.remove("-error");
        }
        let getphone = document.getElementsByClassName("phone")[0];
        let pattern = /^09\d{8}$/;
        if (getphone.value == "" || !pattern.test(getphone.value)) {
            getphone.classList.add("-error");
            send_data = false;
        } else {
            getphone.classList.remove("-error");
        }
        let getemail = document.getElementsByClassName("email")[0];
        if (!is.email(getemail.value)) {
            getemail.classList.add("-error");
            send_data = false;
        } else {
            getemail.classList.remove("-error");
        }
        if (send_data == false) {
            alert("請將紅框內資料填入正確。");

        } else {
            window.location.href = "./booking2.html";
        }
    } else {
        alert("請勾選同意以上所述的預訂條款及條件。");
    }

});


document.addEventListener("DOMContentLoaded", function() {
    let input_star = document.querySelectorAll("input");
    for (let i = 0; i < input_star.length; i++) {
        if (input_star[i].getAttribute("id") == null) {
            input_star[i].parentNode.classList.add("star");
        }
    }
    let select_star = document.querySelectorAll("select");
    for (let i = 0; i < select_star.length; i++) {
        if (select_star[i].getAttribute("id") == null) {
            select_star[i].parentNode.classList.add("star");
        }
    }
});