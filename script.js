const navLinks = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view');
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('main-nav');

function showView(id) {
  views.forEach(v => v.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  navLinks.forEach(a => a.classList.remove('active'));
  document.querySelector(`[data-view="${id}"]`)?.classList.add('active');
  nav.classList.remove('open');
}

navLinks.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    showView(a.dataset.view);
  });
});

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Open booking form from Home page
document.getElementById('open-booking').addEventListener('click', () => {
  showView('book');
});

// Contact form simulation
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
  e.target.reset();
});

// Booking form simulation
document.getElementById('booking-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your booking request has been submitted.');
  e.target.reset();
});

// Default view
showView('home');
