// Burger menu
let burger = document.querySelector('.header__hamburger')
let burgerOpen = false;
let menu = document.querySelector('.nav');

burger.addEventListener('click', () => {
    if(!burgerOpen) {
        burger.classList.add('open')
        menu.style.display = 'flex';
        burgerOpen = true
    } else {
        burger.classList.remove('open')
        menu.style.display = 'none';
        burgerOpen = false
    }
})