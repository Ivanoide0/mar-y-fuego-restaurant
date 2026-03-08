const reveals = document.querySelectorAll(".reveal");

function revealElements(){

reveals.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);