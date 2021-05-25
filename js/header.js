var hamgers = document.getElementsByClassName("hamburger")[0];
var hamgers_box = document.getElementsByClassName("headerright")[0];
hamgers.addEventListener("click", function () {
    let hamgers_classlist = [];
    for (i = 0; i < hamgers.classList.length; i++) {
        hamgers_classlist.push(hamgers.classList[i]);
    }
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
var rooms_right_buttom_adds = '<button type = "button" class="buttons_add" >+ </button>';
var rooms_right_buttom_dels = '<button type = "button" class="buttons_del" > - </button>';
rooms_right_buttom_add.addEventListener("click", function () {


    let rooms_right_buttom_list = [];
    for (let i = 0; i < rooms_right_buttom_add.classList.length; i++) {
        rooms_right_buttom_list.push(rooms_right_buttom_add.classList[i]);
    }

    let roomhide = document.getElementsByClassName("roomhides")[0];


    for (let i = 0; i < rooms_right_buttom_list.length; i++) {
        if (rooms_right_buttom_list[i] != "deletes") {
            rooms_right_buttom_add.classList.add("deletes")
            // let inner = document.querySelectorAll('.logoright');
            // inner[0].innerHTML = rooms_right_buttom_dels;
            // rooms.innerHTML = rooms_right_buttom_dels;

            this.innerHTML = rooms_right_buttom_dels;
            roomhide.style.display = "block";
        } else {
            rooms_right_buttom_add.classList.remove("deletes")
            // let inner = document.querySelectorAll('.logoright');
            // inner[0].innerHTML = rooms_right_buttom_dels;
            // rooms.innerHTML = rooms_right_buttom_dels;

            roomhide.style.display = "none";
            console.log(this.children[0]);
            this.children[0].remove();
            this.innerHTML = rooms_right_buttom_adds;
        }
    }
    // if (rooms_right_buttom_list != null || rooms_right_buttom_add != "") {
    //     rooms_right_buttom_add.classList.add("deletes")
    //     // let inner = document.querySelectorAll('.logoright');
    //     // inner[0].innerHTML = rooms_right_buttom_dels;
    //     // rooms.innerHTML = rooms_right_buttom_dels;

    //     this.innerHTML = rooms_right_buttom_dels;
    //     roomhide.style.display = "block";
    // }else{

    // }

});


