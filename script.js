/* ============================
   MENU RESPONSIVE
============================ */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});


/* ============================
   CARRUSEL DE PRODUCTOS
============================ */

const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
const totalSlides = document.querySelectorAll(".slide").length;

// Actualizar carrusel
function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Actualizar dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Dots clickeables
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});
/* ============================
   ANIMACIÓN EXPORTACIONES
============================ */
const exportBars = document.querySelectorAll(".export-chart .bar");
let exportAnimated = false;

function animateExports() {
  const section = document.querySelector("#exportaciones");
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100 && !exportAnimated) {
    exportAnimated = true;
    exportBars.forEach(bar => {
      bar.style.height = bar.style.getPropertyValue("--h");
    });
  }
}

window.addEventListener("scroll", animateExports);


