const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

// Show initial slide
slides[index].classList.add("active");

// Function to go to previous slide
prev.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
});

// Function to go to next slide
next.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index++;
  if (index === slides.length) {
    index = 0;
  }
  slides[index].classList.add("active");
});
