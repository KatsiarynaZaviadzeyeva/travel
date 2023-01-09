(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header--active');
        } else {
            header.classList.remove('header--active');
        }
    };
}());

// Burger handler 

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation');
    const menuCloseItem = document.querySelector('.header__navigation-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation--active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation--active');
    });
}());