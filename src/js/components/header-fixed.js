export class Fixed {
  constructor() {
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
        if (currentScrollPos > 300) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      }

      // Обновляем предыдущую позицию скролла
      prevScrollPos = currentScrollPos;

      // Если скролл больше 200px, добавляем класс transform, иначе удаляем
      if (currentScrollPos > 300) {
        header.classList.add('transform');
      } else {
        header.classList.remove('transform');
      }
    });
  }
}
