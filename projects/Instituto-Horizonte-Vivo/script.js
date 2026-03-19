const header = document.getElementById("header");
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const topBtn = document.getElementById("topBtn");

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

/* MENU MOBILE */
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* BOTÃO VOLTAR TOPO */
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      section.classList.add("active");
    }
  });
});

/* CONTADOR ANIMADO */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 200;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

/* FORM ALERT */
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});