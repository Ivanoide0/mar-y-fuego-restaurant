const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu a");

// abrir / cerrar menú
hamburger.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});

// cerrar menú al hacer click en un link
links.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});