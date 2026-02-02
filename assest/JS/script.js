
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

  
  // Functionn for contact us page animated video background section

  // Main background animation
lottie.loadAnimation({
  container: document.getElementById("lottie-bg"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_totrpclr.json"
});

// Left box animation
lottie.loadAnimation({
  container: document.getElementById("lottie-left"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets2.lottiefiles.com/packages/lf20_x62chJ.json"
});

// Right box animation
lottie.loadAnimation({
  container: document.getElementById("lottie-right"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets9.lottiefiles.com/packages/lf20_5ngs2ksb.json"
});
