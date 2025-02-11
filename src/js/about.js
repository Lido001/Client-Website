const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabcursor: true,
  spaceBetween: 30,
  speed: 1500,

  
  autoplay: {
    delay: 5000, // Time in milliseconds between each slide (adjust as needed)
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Intersection Observer for Initial Start
const sliderWrapper = document.querySelector(".slider-wrapper");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start autoplay and stop observing
        swiper.autoplay.start();
        console.log("Swiper autoplay started - Slider is visible");

        // Unobserve to ensure autoplay persists after initial visibility
        observer.unobserve(sliderWrapper);
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the slider is visible
  }
);

// Start Observing the Slider
observer.observe(sliderWrapper);