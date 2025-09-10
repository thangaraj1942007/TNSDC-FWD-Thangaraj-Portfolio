// Toggle light/dark mode
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Get input values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Basic validation (optional)
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Show alert with user input
    alert(`Thank you, ${name}!\n\nWe received your message:\n"${message}"\n\nWe’ll contact you at: ${email}`);

    // Optionally reset form
    form.reset();
  });
});
