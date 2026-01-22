
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