export class Validation {
    constructor() {
      document.addEventListener("DOMContentLoaded", () => {
        this.setupNewsletterForm();
        this.setupModalForm();
      });
    }
  
    setupNewsletterForm() {
      const form = document.querySelector(".newsletter__form");
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
      form.addEventListener("submit", (e) => {
        const input = form.querySelector('input[type="text"]');
        const errorLabel = form.querySelector(".error-txt");
  
        if (input && errorLabel) {
          if (!EMAIL_REGEXP.test(input.value)) {
            errorLabel.style.display = 'block';
            e.preventDefault();
          } else {
            errorLabel.style.display = 'none';
          }
        }
      });
    }
  
    setupModalForm() {
      const form1 = document.querySelector(".modal__form");
      const EMAIL_REGEXP1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
      form1.addEventListener("submit", (e) => {
        e.preventDefault();
        let hasEmptyFields = 0;
  
        const inputBoxes = form1.querySelectorAll('.input-box');
        inputBoxes.forEach((inputBox) => {
          const input = inputBox.querySelector('input[type="text"]');
          const inputEmail = inputBox.querySelector('input[type="tel"]');
          const errorLabel = inputBox.querySelector(".error-txt");
  
          if (inputEmail) {
            if (inputEmail.value.length !== 17) {
              errorLabel.classList.add('active');
              hasEmptyFields += 1;
            } else {
              errorLabel.classList.remove('active');
            }
          } else {
            if (this.containsDigitOrEmpty(input.value)) {
              errorLabel.classList.remove('active');
            } else {
              errorLabel.classList.add('active');
              hasEmptyFields += 1;
            }
          }
        });
  
        if (hasEmptyFields === 0) {
          const modal = document.querySelector("#myModal");
          modal.querySelector('.modal__content').classList.add('successfully');
        }
      });
    }
  
    containsDigitOrEmpty(inputString) {
      return !inputString || /\d/.test(inputString);
    }
  }
  