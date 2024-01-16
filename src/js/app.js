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

    
    var form1 = document.querySelector(".modal__form");
    const EMAIL_REGEXP1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
    form1.addEventListener("submit", function (e) {
      e.preventDefault();
      var hasEmptyFields = 0;

      var inputBoxes = form1.querySelectorAll('.input-box')
      inputBoxes.forEach(function(inputBox) {
        var input = inputBox.querySelector('input[type="text"]');
        var input_email = inputBox.querySelector('input[type="tel"]');
        var errorLabel = inputBox.querySelector(".error-txt");

        if (input_email) {
          if (input_email.value.length != 17) {
            errorLabel.classList.add('active')
            hasEmptyFields += 1;
          } else {
            errorLabel.classList.remove('active')
          }
        } else {
          if (containsDigitOrEmpty(input.value)) {
            errorLabel.classList.remove('active')
          } else {
            errorLabel.classList.add('active')
            hasEmptyFields += 1;
          }
          
        }

        if (hasEmptyFields == 0) {
          var modal = document.querySelector("#myModal");
          modal.querySelector('.modal__content').classList.add('successfully');
        }
      });
  
      
    });

    function containsDigitOrEmpty(inputString) {
      if (!inputString || /\d/.test(inputString)) {
          return false;
      }
      
      return true;
    }
  });




