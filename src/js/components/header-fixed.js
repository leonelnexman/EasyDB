export class Fixed {
    constructor() {
        // Добавляем слушатель события DOMContentLoaded
        window.addEventListener("DOMContentLoaded", function() {
          let prevScrollPos = window.pageYOffset;
    
          // Добавляем слушатель события прокрутки страницы
          window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
    
            // Проверяем наличие элемента с классом "header"
            const headerElement = document.querySelector(".header");
            if (headerElement) {
              if (prevScrollPos > currentScrollPos) {
                // Скролл вверх
                headerElement.classList.add("fixed");
              } else {
                // Скролл вниз
                headerElement.classList.remove("fixed");
              }
    
              // Добавление класса "transform" при скролле на 200px вниз
              if (currentScrollPos > 200) {
                headerElement.classList.add("transform");
              } else {
                headerElement.classList.remove("transform");
              }
    
              prevScrollPos = currentScrollPos;
            }
          };
        });
      }
}