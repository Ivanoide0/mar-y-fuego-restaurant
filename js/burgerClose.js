const links = document.querySelectorAll(".nav-menu a");
const navMenu = document.querySelector(".nav-menu");

links.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});