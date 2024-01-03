export class Accordion {
    constructor() {
      document.addEventListener('DOMContentLoaded', function () {
        var questionTops = document.querySelectorAll('.faq__question-top');
    
        questionTops.forEach(function (questionTop, index) {
            var content = questionTop.parentNode.querySelector('.faq__question-content');
            var closeBtn = questionTop.querySelector('.close');
    
            questionTop.addEventListener('click', function () {
                var maxHeight = content.scrollHeight + 'px';
                content.style.maxHeight = content.classList.contains('visible') ? 0 : maxHeight;
                content.classList.toggle('visible');
                closeBtn.classList.toggle('active');
            });
    
            closeBtn.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevent the click event from propagating to the questionTop
                content.style.maxHeight = 0;
                content.classList.remove('visible');
                closeBtn.classList.remove('active');
            });
    
            // Open the first accordion on page load
            if (index === 0) {
                // Trigger a click event on the first questionTop element
                var event = new Event('click');
                questionTop.dispatchEvent(event);
            }
        });
    });
    
    

        document.addEventListener('DOMContentLoaded', function() {
            const itemTop = document.querySelector('.aditions__item-top');
            const itemContent = document.querySelector('.aditions__item-content');
            const item = document.querySelector('.aditions__item');
            const close = document.querySelector('.close');
        
            itemTop.addEventListener('click', function() {
              item.classList.toggle('active');
              close.classList.toggle('active');
        
              // Автоматически высчитываем max-height для элемента aditions__item-content
              if (item.classList.contains('active')) {
                itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
              } else {
                itemContent.style.maxHeight = '0';
              }
            });
          });
    }
}
