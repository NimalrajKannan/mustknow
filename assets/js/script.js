  // Enable hover functionality for dropdown menus
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    });
});

  // Add active class to current nav item
  document.addEventListener('DOMContentLoaded', function() {
      const navItems = document.querySelectorAll('.nav-item');
      
      navItems.forEach(item => {
          item.addEventListener('click', function() {
              // Remove active class from all items
              navItems.forEach(i => i.classList.remove('active'));
              // Add active class to clicked item
              this.classList.add('active');
          });
      });
  });


   // Load header
   fetch('header.html')
   .then(res => res.text())
   .then(data => document.getElementById('header').innerHTML = data);

 // Load footer
 fetch('footer.html')
   .then(res => res.text())
   .then(data => document.getElementById('footer').innerHTML = data);