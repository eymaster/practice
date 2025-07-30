// Bootstrap validation + fake submission
(() => {
  'use strict';

  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Fake send
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'alert alert-success';
    form.reset();
    form.classList.remove('was-validated');
  });
})();
