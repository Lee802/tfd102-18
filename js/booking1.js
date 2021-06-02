document.addEventListener("DOMContentLoaded", function() {
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

    let first_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/09-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">標準雙人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${first_money}</p>
                        <p>x ${first_num} 間</p>
                        <p>x 1 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${first_money * first_num}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;
    let sec_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/leonardo-2091747-tpesh-king-0584-hor-clsc_O-610221-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">景觀雙人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${sec_money}</p>
                        <p>x ${sec_num} 間</p>
                        <p>x 1 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${sec_money * sec_num}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;
    let three_text = `  <div class="roomborders">
    <div class="rooms">
                        <div class="img">
                            <img src="./img/index/rooms/TKUO-Vol3-1920-0030-1.jpg" alt="" class="rooms">
                        </div>
                    </div>
                    <p class="roomstitle">家庭四人房-雙床房</p>
                    <div class="moneystotal moneystotal1">
                        <p>TWD ${three_money}</p>
                        <p>x ${three_num} 間</p>
                        <p>x 1 晚</p>
                    </div>
                    <div class="moneystotal moneystotal2">
                        <p>TWD ${three_money * three_num}</p>
                        <p>(房價已包含</p>
                        <p>稅金及其他</p>
                        <p>費用)</p>
                    </div>
                    </div>`;
    let text_pos = document.getElementsByClassName("moneyitems")[0];
    console.log(text_pos);
    if (first_num > 0) {
        text_pos.insertAdjacentHTML("beforeend", first_text);
    }

    if (sec_num > 0) {
        text_pos.insertAdjacentHTML("beforeend", sec_text);
    }

    if (three_num > 0) {
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