document.body.onload = addUserWorks;

const filmArray = [
    {
        name:"Волк с Уолл-стрит",
        src:"assets/the_wolf_of_wall_street_poster.jpg",
        isLiked: null,
    },
    {
        name:"Таксист",
        src:"assets/taxi_driver_poster.jpg",
        isLiked: null,
    },
    {
        name:"Казино",
        src:"assets/the_casino_poster.jpg",
        isLiked: null,
    },
    {
        name:"Ирландец",
        src:"assets/the_irishman_poster.jpg",
        isLiked: null,
    },
    {
        name:"Остров проклятых",
        src:"assets/shutter_island_poster.jpg",
        isLiked: null,
    },
    {
        name:"Отступники",
        src:"assets/the_departed_poster.jpg",
        isLiked: null,
    },
];

function addUserWorks() {

    for (let i=0; i < filmArray.length; i++) {

        let work = new AddWork(i);
        let elementId = 'user_works_' + i;
        work.init(elementId)
    }
};

const addWorkButton = document.querySelector('#add_title_b');
const modalTitle = document.querySelector('#modal_title');
const closeTitleEdit = document.querySelector('#close_title_btn');
const editTitle = document.querySelector('#edit_title');
const editPoster = document.querySelector('#edit_poster');
const saveTitleDataBtn = document.querySelector('#save_title_data_btn');

saveTitleDataBtn.onclick = function () {
    if (editTitle.value !== '' || editPoster.value !== '') {
        if (editPoster.value === "") {
            editPoster.value = "assets/no_poster_icon.png"
        }
        filmArray.push({
            name: editTitle.value,
            src: editPoster.value,
            isLiked: false,
        })

        let idNumber = filmArray.length - 1;

        let work = new AddWork(idNumber);
        let elementId = 'user_works_' + idNumber;
        work.init(elementId)
    }
    editTitle.value = "";
    editPoster.value = "";
    modalTitle.style.display = "none";
};

addWorkButton.onclick = function () {
    modalTitle.style.display = "block";
};

closeTitleEdit.onclick = function () {
    editTitle.value = "";
    editPoster.value = "";
    modalTitle.style.display = "none";
};

window.onclick = function (e) {
    if (e.target === modalTitle) {
        editTitle.value = "";
        editPoster.value = "";
        modalTitle.style.display = "none";
    } else if (e.target === modal) {
        editPhoto.value = "";
        modal.style.display = "none";
    }
};