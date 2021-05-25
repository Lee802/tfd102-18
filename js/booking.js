var people_border = document.querySelectorAll("div.people")[0];

people_border.addEventListener("click", function() {

    let people_border_class_list = [];
    let people_hide = document.querySelectorAll("div.peoplehide")[0];

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

});