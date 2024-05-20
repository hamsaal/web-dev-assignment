document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelector(".nav-links");

  toggler.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
