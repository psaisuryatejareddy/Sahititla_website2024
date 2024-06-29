document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.yt-vedios .swiper-container', {
      loop: true, // Enable continuous loop mode
      autoplay: {
          delay: 3000, // Time in ms between slide transitions
          disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1, // Number of slides per view
      spaceBetween: 30, // Space between slides in px
      effect: 'slide', // Slide transition effect
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
          },
      },
      fadeEffect: {
          crossFade: true
      },
      on: {
          init: function () {
              // Custom function or animations on initialization
          }
      }
  });
});
