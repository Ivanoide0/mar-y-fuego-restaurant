const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu a");
const navbar = document.querySelector(".navbar");

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


window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});