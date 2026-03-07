// Smooth scroll for nav links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Subtle fade-in on scroll for sections
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in');
});

if (prefersReducedMotion) {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Email obfuscation
(function () {
  const el = document.getElementById('email-link');
  if (el) {
    const user = 'andesstriker';
    const domain = 'gmail.com';
    el.href = 'mailto:' + user + '@' + domain;
  }
})();
