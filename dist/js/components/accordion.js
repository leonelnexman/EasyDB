export class Accordion {
    constructor() {
      document.addEventListener('DOMContentLoaded', () => {
        const questionTops = document.querySelectorAll('.faq__question-top');
  
        questionTops.forEach((questionTop, index) => {
          const content = questionTop.parentNode.querySelector('.faq__question-content');
          const closeBtn = questionTop.querySelector('.close');
  
          const toggleContent = () => {
            const maxHeight = content.scrollHeight + 'px';
            content.style.maxHeight = content.classList.contains('visible') ? 0 : maxHeight;
            content.classList.toggle('visible');
            closeBtn.classList.toggle('active');
          };
  
          questionTop.addEventListener('click', toggleContent);
          closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            content.style.maxHeight = 0;
            content.classList.remove('visible');
            closeBtn.classList.remove('active');
          });
  
          if (index === 0) {
            const event = new Event('click');
            questionTop.dispatchEvent(event);
          }
        });
  
        const itemTop = document.querySelector('.aditions__item-top');
        const itemContent = document.querySelector('.aditions__item-content');
        const item = document.querySelector('.aditions__item');
        const close = document.querySelector('.close');
  
        itemTop.addEventListener('click', () => {
          item.classList.toggle('active');
          close.classList.toggle('active');
  
          const maxHeight = itemContent.scrollHeight + 'px';
          itemContent.style.maxHeight = item.classList.contains('active') ? maxHeight : '0';
        });
      });
    }
  }
  