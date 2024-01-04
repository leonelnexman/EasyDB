export class Menu {
    constructor() {
      document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const headerMenu = document.querySelector('.header__menu');
        const hamburgerClose = document.querySelector('.hamburger-close');
  
        hamburger.addEventListener('click', function () {
          headerMenu.classList.add('active');
          document.body.style.overflow = 'hidden'; 
        });
  
        hamburgerClose.addEventListener('click', function () {
          headerMenu.classList.remove('active');
          document.body.style.overflow = ''; 
        });
  
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(function (navLink) {
          navLink.addEventListener('click', function () {
            const closestHeaderMenu = navLink.closest('.header__menu');
            if (closestHeaderMenu) {
              closestHeaderMenu.classList.remove('active');
              document.body.style.overflow = ''; 
            }
          });
        });
      });
    }
  }
  