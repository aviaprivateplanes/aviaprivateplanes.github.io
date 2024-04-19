document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el carousel
    var carousel = document.querySelector('#carouselExampleIndicators');
  
    // Inicia el carousel
    var carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 5000 // Cambia de diapositiva cada 5 segundos (5000 milisegundos)
    });
  });