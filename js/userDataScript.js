const name = document.querySelector('#user_name');
name.innerHTML = "Мартин Скорсезе";
const profession = document.querySelector('#profession');
profession.innerHTML = "Режиссер";
const photo = document.querySelector('#user_photo');
photo.src = "assets/martin_scorsese_photo.jpg"

const modal = document.querySelector('#modal_user');
const editUser = document.querySelector('#edit_icon_b');
const closeSp = document.querySelector('#close_btn');
const editName = document.querySelector('#edit_name');
const editProfession = document.querySelector('#edit_profession');
const editPhoto = document.querySelector('#edit_photo');
const saveUserDataBtn = document.querySelector('#save_user_data_btn');
editName.value = name.innerHTML;
editProfession.value = profession.innerHTML;

editUser.onclick = function () {
    modal.style.display = "block";
};

saveUserDataBtn.onclick = function () {
    if (name.innerHTML !== editName.value || profession.innerHTML !== editProfession.value) {
        name.innerHTML = editName.value;
        profession.innerHTML = editProfession.value;
        if (editPhoto.value !== '') { photo.src = editPhoto.value;}
    }
    editPhoto.value = "";
    modal.style.display = "none";
};

closeSp.onclick = function () {
    editPhoto.value = "";
    modal.style.display = "none";
};
