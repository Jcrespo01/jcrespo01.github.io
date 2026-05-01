/* =========================
   SLIDESHOW
   ========================= */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideSpeed = 3500;

if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, slideSpeed);
}


/* =========================
   LIGHTBOX (CLICK TO ZOOM)
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const images = document.querySelectorAll('.clickable');
  const closeBtn = document.querySelector('.close');

  if (!lightbox || !lightboxImg || images.length === 0) {
    console.log("Lightbox elements not found");
    return;
  }

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});