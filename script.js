let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header nav');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}