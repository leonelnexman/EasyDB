export class Fixed {
  constructor() {

    const isMobile = window.matchMedia("(max-width: 962px)").matches;

  if (!isMobile) {
    var header = document.querySelector('.header');
    var prevScrollPos = window.pageYOffset;

    // Обработчик события скролла
    window.addEventListener('scroll', function() {
      var currentScrollPos = window.pageYOffset;

      // Проверяем направление скролла
      if (currentScrollPos > prevScrollPos) {
        // Скролл вниз
        header.classList.remove('fixed');
      } else {
        // Скролл вверх
        // Проверяем, что расстояние до верхней границы экрана больше 300px перед добавлением класса 'fixed'
        if (currentScrollPos > 200) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      }

      // Обновляем предыдущую позицию скролла
      prevScrollPos = currentScrollPos;

      // Если скролл больше 200px, добавляем класс transform, иначе удаляем
      if (currentScrollPos > 200) {
        header.classList.add('transform');
      } else {
        header.classList.remove('transform');
      }
    });
  }



  const isDs = window.matchMedia("(max-width: 962px)").matches;

  if (isDs) {
    var header = document.querySelector('.header');
    var prevScrollPos = window.pageYOffset;

    // Обработчик события скролла
    window.addEventListener('scroll', function() {
      var currentScrollPos = window.pageYOffset;

      // Проверяем направление скролла
      if (currentScrollPos > prevScrollPos) {
        // Скролл вниз
        header.classList.remove('fixed');
      } else {
        // Скролл вверх
        // Проверяем, что расстояние до верхней границы экрана больше 300px перед добавлением класса 'fixed'
        if (currentScrollPos > 100) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      }

      // Обновляем предыдущую позицию скролла
      prevScrollPos = currentScrollPos;

      // Если скролл больше 200px, добавляем класс transform, иначе удаляем
      if (currentScrollPos > 100) {
        header.classList.add('transform');
      } else {
        header.classList.remove('transform');
      }
    });
  }
  }
}
