export class Tabs {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.initTabs();
    });
  }

  initTabs() {
    const tabs = document.querySelectorAll('.cases__tab');

    if (tabs.length > 0) {
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          this.toggleTab(index);
        });
      });
    }
  }

  toggleTab(index) {
    const tabs = document.querySelectorAll('.cases__tab');
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    tabs[index].classList.add('active');

    const blocks = document.querySelectorAll('.cases__block');
    blocks.forEach((block) => {
      block.classList.remove('active');
    });

    blocks[index].classList.add('active');
  }
}
