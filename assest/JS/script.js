
// <!-- JS for Responsive Nav -->
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav-list-visible');
  });

  // <!--  JS to update the year  -->
  const yearSpan = 
  document.getElementById('current-year');
  const currentYear = new
  Date().getFullYear();
  yearSpan.textContent = currentYear;

  // <!-- JS for fade-in effect on scroll -->
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  document.querySelectorAll('.fade-section').forEach((el) => {
    observer.observe(el);
  });