let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

burger.addEventListener('click', (e) => {
    if (e.target == burger) {
        menu.classList.toggle('active');  
    }
    if (menu.classList.contains('active')) {
        burger.classList.add('active') 
    }
    else {
        burger.classList.remove('active')
    }
} )