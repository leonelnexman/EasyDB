

export class SwiperInit {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      
    });

    document.addEventListener('DOMContentLoaded', function () {
      if (window.innerWidth < 962) {
        if (document.querySelector('.multifunctional__slider')) {
          const heation = new Swiper('.multifunctional__slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
          });
        }
        if (document.querySelector('.why__slider')) {
          const why = new Swiper('.why__slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
          });
        }
      }
    });
  }
}
