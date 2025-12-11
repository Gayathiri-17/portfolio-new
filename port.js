// Update current year
document.getElementById("year").textContent = new Date().getFullYear();

// Typed.js for animated text
var typed = new Typed(".typed-text", {
  strings: ["Software Trainer", "Web Developer", "Frontend Developer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});
