export class Menu {
  constructor() {
      document.addEventListener('DOMContentLoaded', function () {
          var hamburger = document.querySelector('.hamburger');
          var headerMenu = document.querySelector('.header__menu');
          var hamburgerClose = document.querySelector('.hamburger-close');

          hamburger.addEventListener('click', function () {
              headerMenu.classList.add('active');
              document.body.style.overflow = 'hidden'; // Add this line to hide body overflow
          });

          hamburgerClose.addEventListener('click', function () {
              headerMenu.classList.remove('active');
              document.body.style.overflow = ''; // Add this line to restore body overflow
          });

          // Добавляем обработчик события для элементов с классом 'nav-link'
          var navLinks = document.querySelectorAll('.nav__link');
          navLinks.forEach(function (navLink) {
              navLink.addEventListener('click', function () {
                  // Ищем ближайший элемент с классом 'header-menu' и удаляем у него класс 'active'
                  var closestHeaderMenu = navLink.closest('.header__menu');
                  if (closestHeaderMenu) {
                      closestHeaderMenu.classList.remove('active');
                      document.body.style.overflow = ''; // Add this line to restore body overflow
                  }
              });
          });
      });
  }
}
