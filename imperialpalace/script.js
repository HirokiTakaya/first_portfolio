(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('dropdown_btn');
        if (btn) {
            btn.addEventListener('click', function () {
                this.classList.toggle('is-open');
            });
        }
    });
}());
const images = ['images/IMG_7223.PNG', 'images/IMG_7385.PNG', 'images/IMG_7225.PNG', 'images/IMG_7226.PNG', 'images/IMG_7384.PNG'];
let current = 0;

function changeImage(num) {
    if (current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
}
function pageNum() {
    document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}
pageNum();
document.getElementById('prev').onclick = function () {
    changeImage(-1);
};
document.getElementById('next').onclick = function () {
    changeImage(1);
};

