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



// load footer
fetch('footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer').innerHTML = data);

 //load about us page
fetch('about.html')
.then(res => res.text())
.then(data => document.getElementById('about-us').innerHTML = data);

 //load menu page
 fetch('menu.html')
 .then(res => res.text())
 .then(data => document.getElementById('menu-sections').innerHTML = data);
 


    