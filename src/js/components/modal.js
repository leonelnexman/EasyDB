export class Modal {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('myModal');
      const openModalBtn = document.body;

      openModalBtn.addEventListener('click', (event) => {
        const openModalBtn = event.target.closest('.open-modal');
        if (openModalBtn) {
          modal.style.display = 'flex';
        }
      });

      document.getElementById('closeModalBtn').addEventListener('click', () => closeModal());

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });

      document.querySelector('.modal__successfully-btn').addEventListener('click', () => {
        closeModal();
        const modalContent = document.querySelector('.modal__content');
        modalContent.classList.remove('successfully', 'error');
      });

      const goTopButton = document.querySelector('.footer__go-top');

      goTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });

    const closeModal = () => {
      document.getElementById('myModal').style.display = '';
      const modalContent = document.querySelector('.modal__content');
      modalContent.classList.remove('successfully', 'error');
    };
  }
}
