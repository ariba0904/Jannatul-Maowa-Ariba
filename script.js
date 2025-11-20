// script.js - small UI behavior
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  // Simple client-side feedback (no server)
  const feedback = document.getElementById('feedback');
  feedback.style.color = 'green';
  feedback.textContent = 'Thanks! Your message was recorded locally — for a real contact form, connect to a backend or an email service.';
  // clear fields
  e.target.reset();
});

