function AddWork(number) {
    this.photoURL = filmArray[number].src;
    this.workName = filmArray[number].name;
    this.isWorkLiked = filmArray[number].isLiked;

    let newTitle = document.createElement("div");
    newTitle.className = "user_works";
    newTitle.id = 'user_works_' + number;
    document.querySelector('#all_works').appendChild(newTitle);

    let newWork = document.createElement("div");
    newWork.innerHTML = "<div class='first_work'>\n" +
        "                    <div class='first_work_photo_wrapper'>\n" +
        "                        <img class='first_work_photo' alt=''>\n" +
        "                    </div>\n" +
        "                    <div class='span_wrapper'>\n" +
        "                        <span class='first_work_span'></span>\n" +
        "                        <div class='like_b_wrapper'>\n" +
        "                            <img class='like_icon' src='assets/like_b.png' alt=''>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>";

    let allWorksId = '#user_works_' + number;
    document.querySelector(allWorksId).appendChild(newWork);

    this.init = function (elId) {
        let el = document.querySelector('#' + elId);

        const filmPhoto = el.querySelector('.first_work_photo');
        filmPhoto.src = this.photoURL
        const filmName = el.querySelector('.first_work_span');
        filmName.innerHTML = this.workName

        const likeIcon = el.querySelector('.like_icon');
        const likeIconButton = el.querySelector('.like_b_wrapper');
        let isLiked = false;

        likeIconButton.onclick = function () {
            if (isLiked === false) {
                likeIcon.src = 'assets/like_b_active.png';
                isLiked = true;
                filmArray[number].isLiked = isLiked;
            } else if (isLiked === true) {
                likeIcon.src = 'assets/like_b.png';
                isLiked = false;
                filmArray[number].isLiked = isLiked;
            }
        }
    }
}