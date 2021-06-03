var rooms_right_buttom_add = document.getElementsByClassName("buttons_add")[0];
var rooms_right_buttom_del = document.getElementsByClassName("buttons_del")[0];
var rooms_right_buttom_adds = '<button type = "button" class="buttons_add" id="add">+ </button>';
var rooms_right_buttom_dels = '<button type = "button" class="buttons_del" id="del"> - </button>';
let li_a = document.getElementById("pos").getElementsByClassName("logoright")[0];
// rooms_right_buttom_add.addEventListener("click", function() {


//     let rooms_right_buttom_list = [];
//     for (let i = 0; i < rooms_right_buttom_add.classList.length; i++) {
//         rooms_right_buttom_list.push(rooms_right_buttom_add.classList[i]);
//     }
//     // console.log(li_a);
//     let roomhide = document.getElementsByClassName("roomhides")[0];


//     for (let i = 0; i < rooms_right_buttom_list.length; i++) {
//         if (rooms_right_buttom_list[i] != "deletes") {
//             rooms_right_buttom_add.classList.add("deletes");
//             // let inner = document.querySelectorAll('.logoright');
//             // inner[0].innerHTML = rooms_right_buttom_dels;
//             // rooms.innerHTML = rooms_right_buttom_dels;

//             // get_del.remove();

//             li_a.insertAdjacentHTML("afterend", rooms_right_buttom_dels);
//             // roomhide.style.display = "block";
//             let get_add = document.getElementById("add");
//             // console.log(get_add);
//             get_add.remove();
//         } else {
//             rooms_right_buttom_add.classList.remove("deletes");
//             // let inner = document.querySelectorAll('.logoright');
//             // inner[0].innerHTML = rooms_right_buttom_dels;
//             // rooms.innerHTML = rooms_right_buttom_dels;

//             // get_add.remove();

//             // roomhide.style.display = "none";
//             // console.log(this.children[0]);
//             // this.children[0].remove();
//             // this.innerHTML = rooms_right_buttom_adds;
//             li_a.insertAdjacentHTML("afterend", rooms_right_buttom_adds);
//             let get_del = document.getElementById("del");
//             get_del.remove();
//         }
//     }
//     // if (rooms_right_buttom_list != null || rooms_right_buttom_add != "") {
//     //     rooms_right_buttom_add.classList.add("deletes")
//     //     // let inner = document.querySelectorAll('.logoright');
//     //     // inner[0].innerHTML = rooms_right_buttom_dels;
//     //     // rooms.innerHTML = rooms_right_buttom_dels;

//     //     this.innerHTML = rooms_right_buttom_dels;
//     //     roomhide.style.display = "block";
//     // }else{

//     // }

// });
var hamgers = document.getElementsByClassName("hamburger")[0];
var hamgers_box = document.getElementsByClassName("headerright")[0];
let hamgers_classlist = [];
hamgers.addEventListener("click", function() {

    for (i = 0; i < hamgers.classList.length; i++) {
        hamgers_classlist.push(hamgers.classList[i]);
    }
    for (let i = 0; i < hamgers_classlist.length; i++) {
        if (hamgers_classlist[i] == "is-active") {
            hamgers_box.classList.add("openbox");
        } else {
            hamgers_box.classList.remove("openbox");
        }
    }

    // for (let i = 0; i < hamgers_classlist.length; i++) {
    //     if (hamgers_classlist[i] == "is-active") {
    //         for (let i = 0; i < li_all.length; i++) {
    //             hamgers_box.classList.add(openbox);
    //         }
    //     } else {
    //         for (let i = 0; i < li_all.length; i++) {
    //             li_all[i].style.display = "none"
    //         }
    //     }
    // }

});

document.addEventListener("click", function(event) {

    if (event.target.getAttribute("id") == "add") {
        li_a.insertAdjacentHTML("afterend", rooms_right_buttom_dels);
        let get_add = document.getElementById("add");
        get_add.remove();

        let roomhide = document.getElementById("roomhides");
        roomhide.style.display = "block";
        // console.log(li_a);
    }
    if (event.target.getAttribute("id") == "del") {
        li_a.insertAdjacentHTML("afterend", rooms_right_buttom_adds);
        let get_del = document.getElementById("del");
        get_del.remove();

        let roomhide = document.getElementById("roomhides");
        roomhide.style.display = "none";
    }
    if (event.target.getAttribute("id") != "hamburger" && event.target.getAttribute("id") != "hamburger1" && event.target.getAttribute("id") != "hamburger2" && event.target.getAttribute("id") != "add" && event.target.getAttribute("id") != "del") {
        if (hamgers_box.classList.contains("openbox")) {
            hamgers_box.classList.remove("openbox");
            let ham2 = document.getElementById("hamburger2");
            ham2.click();
        }
    }

});