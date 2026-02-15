let currentSlideIndex = 0;
let currentArtistSlideIndex = 0;

// Song carousel functions
function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-container:not(.artists-carousel) .carousel-item');
  const dots = document.querySelectorAll('.carousel-dots:not(.artists-dots) .dot');
  const captionSong = document.querySelector('.caption-song');
  const captionArtist = document.querySelector('.caption-artist');

  if (n >= slides.length) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  if (slides[currentSlideIndex]) {
    slides[currentSlideIndex].classList.add('active');
    if (captionSong && captionArtist) {
      captionSong.textContent = slides[currentSlideIndex].getAttribute('data-song');
      captionArtist.textContent = slides[currentSlideIndex].getAttribute('data-artist');
    }
  }
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add('active');
  }
}

// Artist carousel functions
function changeArtistSlide(n) {
  showArtistSlide(currentArtistSlideIndex += n);
}

function currentArtistSlide(n) {
  showArtistSlide(currentArtistSlideIndex = n);
}

function showArtistSlide(n) {
  const slides = document.querySelectorAll('.artists-carousel .carousel-item');
  const dots = document.querySelectorAll('.artists-dots .dot');
  const captionArtistName = document.querySelector('.caption-artist-name');

  if (n >= slides.length) {
    currentArtistSlideIndex = 0;
  }
  if (n < 0) {
    currentArtistSlideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  if (slides[currentArtistSlideIndex]) {
    slides[currentArtistSlideIndex].classList.add('active');
    if (captionArtistName) {
      captionArtistName.textContent = slides[currentArtistSlideIndex].getAttribute('data-artist');
    }
  }
  if (dots[currentArtistSlideIndex]) {
    dots[currentArtistSlideIndex].classList.add('active');
  }
}

// Initialize carousels on page load
document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlideIndex);
  showArtistSlide(currentArtistSlideIndex);
});
