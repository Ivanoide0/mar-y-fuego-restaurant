const reveals = document.querySelectorAll(".reveal");

function revealElements(){

  const windowHeight = window.innerHeight;

  reveals.forEach(el => {

    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }

  });

}

// ejecuta al hacer scroll
window.addEventListener("scroll", revealElements);

// ejecuta al cargar la página
window.addEventListener("load", revealElements);