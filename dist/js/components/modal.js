export class Modal {
    constructor() {
      document.addEventListener('DOMContentLoaded', function () {
        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('open-modal')) {
                document.getElementById('myModal').style.display = 'flex';
            }
        });

        // JavaScript to close the modal when the close button is clicked
        document.getElementById('closeModalBtn').addEventListener('click', function () {
            document.getElementById('myModal').style.display = '';
        });

        // Close the modal if the overlay (outside the modal) is clicked
        window.addEventListener('click', function (event) {
            var modal = document.getElementById('myModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        var goTopButton = document.querySelector('.footer__go-top');
  
        goTopButton.addEventListener('click', function() {
          // Используем smooth behavior для плавного скроллинга
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      });

    }
  }