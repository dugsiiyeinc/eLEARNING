
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
const pagesLink = dropdown.querySelector("a");

/* Hamburger */
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});