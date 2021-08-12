// Burger menu
let burger = document.querySelector('.header__hamburger')
let burgerOpen = false;
let menu = document.querySelector('.nav');
let maxWidth = 991;

let onresize = function () {
    let width = document.body.clientWidth;

    if(width > maxWidth ){
        menu.classList.remove('d-none')
        menu.classList.add('d-flex')  
    }
    else if (width <= maxWidth && !burger.classList.contains('open')) {
        menu.classList.remove('d-flex')
        menu.classList.add('d-none')
    } else if (width <= maxWidth && burger.classList.contains('open')) {
        menu.classList.remove('d-none')
        menu.classList.add('d-flex')
    }
};
window.addEventListener('resize', onresize);


burger.addEventListener('click', () => {
    if(burgerOpen) {
        burger.classList.remove('open')
        menu.classList.add('d-none')
        menu.classList.remove('d-flex')
        burgerOpen = false
    } else {
        burger.classList.add('open')
        menu.classList.add('d-flex')
        menu.classList.remove('d-none')
        burgerOpen = true
    }
})
