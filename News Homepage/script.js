const menu_btn = document.querySelector('.mobile_menu');
const mobile_menu = document.querySelector('.nav-list');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });