document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelector(".nav-links");

  toggler.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('exploreButton').addEventListener('click', function() {
    window.location.href = 'explore.html';
  });

  document.getElementById('createButton').addEventListener('click', function() {
    window.location.href = 'create.html';
  });
});