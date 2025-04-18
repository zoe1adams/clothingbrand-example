// === Carousel Controls ===
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const products = document.querySelectorAll('.carousel .product');

let currentSlide = 0;

function showSlide(index) {
  products.forEach((product, i) => {
    product.style.display = i === index ? 'block' : 'none';
  });
}

if (leftArrow && rightArrow) {
  showSlide(currentSlide);

  leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + products.length) % products.length;
    showSlide(currentSlide);
  });

  rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % products.length;
    showSlide(currentSlide);
  });
}

// === Navigation Highlighting (optional) ===
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.parentElement.classList.add('active');
  }
});

// === Future: Add to Cart / Popup Logic ===
// function addToCart(itemID) {
//   alert(`Added item ${itemID} to cart.`);
// }
// JS for dummy interactivity