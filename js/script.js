// Load navbar.html into the #navbar div
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Add event listener for hamburger after navbar is injected
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('navItems');

    if (hamburger && navItems) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navItems.classList.toggle('active');
      });
    } else {
      console.error('Hamburger or navItems not found');
    }
  })
  .catch(err => console.error("Failed to load navbar:", err));


//JS for the counter animation
// This script animates the counter numbers in the stats section
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // lower = faster

  const startCounter = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString(); // Add comma separator
        }
      };

      updateCount();
    });
  };

  // Optional: Start counting when stats section is in viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
        observer.disconnect(); // Run once
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats');
  observer.observe(statsSection);
});



// load footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);

//load about us page
fetch('about.html')
  .then(res => res.text())
  .then(data => document.getElementById('about-container').innerHTML = data);

//load menu page
fetch('menu.html')
  .then(res => res.text())
  .then(data => document.getElementById('menu-container').innerHTML = data);

//load service page
fetch('service.html')
  .then(res => res.text())
  .then(data => document.getElementById('service').innerHTML = data);



