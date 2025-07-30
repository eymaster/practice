document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgDisplay = document.getElementById('form-msg');

  if (!name || !email || !message) {
    msgDisplay.textContent = "Please fill out all fields.";
    msgDisplay.style.color = "red";
    return;
  }

  // Simulate sending message
  msgDisplay.textContent = "Message sent successfully!";
  msgDisplay.style.color = "green";

  // Reset form
  this.reset();
});

