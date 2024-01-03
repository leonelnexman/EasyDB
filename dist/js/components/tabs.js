export class Tabs {
    constructor() {
      document.addEventListener("DOMContentLoaded", () => {
        this.initTabs();
      });
    }
  
    initTabs() {
      var tabs = document.querySelectorAll('.cases__tab');
  
      // Проверяем, существуют ли вкладки
      if (tabs.length > 0) {
        tabs.forEach((tab, index) => {
          tab.addEventListener('click', () => {
            this.toggleTab(index);
          });
        });
      }
    }
  
    toggleTab(index) {
      // Убираем класс active у всех элементов с классом cases__tab
      var tabs = document.querySelectorAll('.cases__tab');
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
  
      // Добавляем класс active к выбранному элементу с классом cases__tab
      tabs[index].classList.add('active');
  
      // Убираем класс active у всех элементов с классом cases__block
      var blocks = document.querySelectorAll('.cases__block');
      blocks.forEach((block) => {
        block.classList.remove('active');
      });
  
      // Добавляем класс active к соответствующему элементу с классом cases__block
      blocks[index].classList.add('active');
    }
  }