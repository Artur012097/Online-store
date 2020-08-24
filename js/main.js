let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');
let header = document.querySelector('.header-block');
let headerLogo = document.querySelector('.header-logo')

burger.addEventListener('click', () => {
        menu.classList.toggle('active');  
    if (menu.classList.contains('active')) {
        burger.classList.add('active') 
    }
    else {
        burger.classList.remove('active')
    }
    if (menu.classList.contains('active')){
        headerLogo.classList.add('openned');
    }
    else {
        headerLogo.classList.remove('openned');
    }
} )

window.addEventListener('scroll', headerScroll);

    function headerScroll() {
        if (window.scrollY >= header.offsetHeight) {
            headerLogo.classList.add('scrolled')
            burger.classList.add('scrolled')
            menu.style.position = 'fixed';
            menu.style.top = '0';
        }
        else {
            headerLogo.classList.remove('scrolled')
            burger.classList.remove('scrolled')
            menu.style.position = 'absolute';
            menu.style.top = header.offsetHeight + 'px';
        }
}