const editUserDataEl = document.querySelector('#edit_icon_b');
const editUserDataIco = document.querySelector('#edit_user_icon');

const editTitleDataEl = document.querySelector('#add_title_b');
const editTitleDataIco = document.querySelector('#edit_title_icon');

const closeUserDataButt = document.querySelector('#close_btn');
const closeUserDataIco = document.querySelector('#close_btn_icon');
const closeTitleDataButt = document.querySelector('#close_title_btn');
const closeTitleDataIco = document.querySelector('#close_title_ico');

editUserDataEl.onmouseover = function () {
    editUserDataIco.src = "assets/edit_icon_active.svg";
};
editUserDataEl.onmouseout = function () {
    editUserDataIco.src = "assets/edit_icon.svg";
};

editTitleDataEl.onmouseover = function () {
    editTitleDataIco.src = "assets/add_title_icon_active.svg";
};
editTitleDataEl.onmouseout = function () {
    editTitleDataIco.src = "assets/add_title_icon.svg";
};

closeUserDataButt.onmouseover = closeTitleDataButt.onmouseover = function () {
    closeUserDataIco.src = closeTitleDataIco.src = "assets/close_icon_active.svg";
};
closeUserDataButt.onmouseout = closeTitleDataButt.onmouseout = function () {
    closeUserDataIco.src = closeTitleDataIco.src = "assets/close_icon.svg";
};