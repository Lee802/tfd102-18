let start_dates = sessionStorage.getItem("startdate");
let end_dates = sessionStorage.getItem("enddate")
let new_start = new Date(start_dates);
let new_end = new Date(end_dates);

let weekdays = "星期日,星期一,星期二,星期三,星期四,星期五,星期六".split(",");
let text = `<div>
                    <p>入住時間</p><br>
                    <p class="date">${start_dates} ${weekdays[new_start.getDay()] } 下午 2 : 00 - 下午 11 : 59</p>
                </div>
                <div>
                    <p>退房時間</p><br>
                    <p class="date">${end_dates} ${weekdays[new_end.getDay()]} 上午 00 : 00 - 上午 11 : 00</p>
                </div>`;
let checkinout = document.getElementById("checkinout");
checkinout.insertAdjacentHTML("afterbegin", text);


let mid = document.getElementById("mid");
let text1 = `<h2>您的住宿訂單</h2>
            <p>訂單號碼：${Date.now()}</p>`;
mid.insertAdjacentHTML("afterbegin", text1);