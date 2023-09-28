// *Barra de navegação
const navbar = document.getElementById('navbar');

// *Adicionando um scroll event
window.addEventListener('scroll', () => {

if (window.pageYOffset > 0) {

    navbar.classList.add('scrolled');
} else {

    navbar.classList.remove('scrolled');
}
});

// *Adicionando o carousel
const carouselSection = document.getElementById('carousel-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      enableCarouselScroll();
    } else {
      disableCarouselScroll();
    }
  });
});

observer.observe(carouselSection);

function enableCarouselScroll() {
  const carousel = document.querySelector('.carousel');
  carousel.classList.add('scrollable');
}

function disableCarouselScroll() {
  const carousel = document.querySelector('.carousel');
  carousel.classList.remove('scrollable');
}

const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach((item, index) => {
  const carouselCaption = item.querySelector('.carousel-caption');
  item.addEventListener('mouseenter', () => {
    carouselCaption.classList.add('active');
  });
  item.addEventListener('mouseleave', () => {
    carouselCaption.classList.remove('active');
  });
});