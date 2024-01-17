export class Modal {
  constructor() {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.addEventListener('click', function (event) {
        const openModalBtn = event.target.closest('.open-modal');
        if (openModalBtn) {
          document.getElementById('myModal').style.display = 'flex';
        }
      });

      // JavaScript to close the modal when the close button is clicked
      document.getElementById('closeModalBtn').addEventListener('click', function () {
        closeModal();
      });

      // Close the modal if the overlay (outside the modal) is clicked
      window.addEventListener('click', function (event) {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
          closeModal();
        }
      });

      // Event listener for the button with class 'modal__successfully-btn'
      document.querySelector('.modal__successfully-btn').addEventListener('click', function () {
        closeModal();
        // Remove any added classes from the modal__content element
        const modalContent = document.querySelector('.modal__content');
        modalContent.classList.remove('successfully', 'error', /* ... */);
      });

      const goTopButton = document.querySelector('.footer__go-top');

      goTopButton.addEventListener('click', function () {
        // Используем smooth behavior для плавного скроллинга
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });

    function closeModal() {
      document.getElementById('myModal').style.display = '';
    }
  }
}
