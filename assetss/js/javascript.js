$(document).ready(function() {
    var swiper = new swiper(".parallax-slider", {
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: {
            delay: 5000, // Adjust autoplay delay as needed
            disableOnInteraction: false
        },
        grabCursor: true,
        effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-nav-next",
            prevEl: ".swiper-nav-prev"
        },
    });
});