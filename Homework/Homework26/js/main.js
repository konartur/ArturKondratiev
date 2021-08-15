// Burger menu
let burger = document.querySelector('.header__hamburger')
let burgerOpen = false;
let menu = document.querySelector('.nav');
let maxWidth =  991;

// Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // speed: 400,
  // spaceBetween: 100,
    // Default parameters
// slidesPerView: 7,
// spaceBetween: 10,
// Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 4,
    spaceBetween: 30
  },
   // when window width is >= 992px
  992: {
    slidesPerView: 7,
    spaceBetween: 20
    
  }
}
});

let onresize = function () {
  let width = document.body.clientWidth;
  swiperToggleByWidth(width);
  
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

let swiperToggleByWidth = (width, laptopBreakpointWidth = 991) => {
  if (width >= laptopBreakpointWidth) {
    swiper.disable();
  } else {
    swiper.enable()
  }
}
swiperToggleByWidth(document.body.clientWidth);



