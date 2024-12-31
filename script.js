// Placeholder for future interactivity like filters or lightbox effect
console.log("Welcome to the Art Gallery!");
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

showSlides();
