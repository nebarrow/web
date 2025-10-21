import "/src/sass/style.scss";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 50 },
    769: { slidesPerView: 3, spaceBetween: 50 },
    1200: { slidesPerView: 3, spaceBetween: 50 },
    1920: { slidesPerView: 3, spaceBetween: 50 }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelector('.menu__items');

burger.addEventListener('click', () => {
  menuItems.classList.add('active');
  closeMenu.classList.add('active');
  burger.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menuItems.classList.remove('active');
  closeMenu.classList.remove('active');
  burger.style.display = 'flex';
});
