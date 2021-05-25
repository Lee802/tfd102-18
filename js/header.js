var hamgers = document.getElementsByClassName("hamburger")[0];
var hamgers_box = document.getElementsByClassName("headerright")[0];
hamgers.addEventListener("click", function () {
    let hamgers_classlist = [];
    for (i = 0; i < hamgers.classList.length; i++) {
        hamgers_classlist.push(hamgers.classList[i]);
    }
    console.log(hamgers_box);
    for(let i = 0; i < hamgers_classlist.length; i++) {
        if (hamgers_classlist[i] == "is-active") {
            hamgers_box.classList.add("openbox");
        }else{
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



var rooms_right_buttom_add = document.getElementsByClassName("buttons_add")[0];
var rooms_right_buttom_del = document.getElementsByClassName("buttons_del")[0];
var rooms_right_buttom_adds = '<button type="button" class="buttons_add">+</button>';
var rooms_right_buttom_dels = '<button type="button" class="buttons_del">+</button>';
rooms_right_buttom_add.addEventListener("click", function () {

    let roomhide = document.getElementsByClassName("roomhides")[0];
    if (rooms_right_buttom_add != null || rooms_right_buttom_add != "") {
        roomhide.style.display = "block";
        let inner = document.querySelectorAll('.buttons_add');
        inner[0].innerHTML = rooms_right_buttom_dels;
    }else{

    }

});


