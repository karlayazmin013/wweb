let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const videos = document.querySelectorAll('.video-slide');
function showSlide(index) {
    // Oculta todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    // Muestra el slide actual
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Opcional: Autoplay cada 5 segundos
