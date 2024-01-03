import { SwiperInit } from './components/swiperinit.js';
import { Tabs } from './components/tabs.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { Mask } from './components/mask.js';
import { Fixed } from './components/header-fixed.js';
import { Menu } from './components/menu.js';

const SwiperInstance = new SwiperInit();
const TabsInstance = new Tabs();
const AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const MaskInstance = new Mask();
const FixedInstance = new Fixed();
const MenuInstance = new Menu();

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter__form");
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
    form.addEventListener("submit", function (e) {
      var hasEmptyFields = false;
  
      var input = form.querySelector('input[type="text"]');
      var errorLabel = form.querySelector(".error-txt");
  
      if (input && errorLabel) {
        if (!EMAIL_REGEXP.test(input.value)) {
          errorLabel.style.display = 'block';
          hasEmptyFields = true;
        } else {
          errorLabel.style.display = 'none';
        }
      }
      if (hasEmptyFields) {
        e.preventDefault();
      }
    });
  });


// export class Component1 {
//   // Ваш код здесь
// }