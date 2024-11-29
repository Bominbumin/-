const blue = new Swiper(".slide .swiper", {
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  navigation: {
    prevEl: "swiper-button-next",
    nextEl: "swiper-button-prev",
  },
  pagination: {
    el: ".slide swiper-pagination",
    clickable: true,
  },
});

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

const red = new Swiper(".con1 .swiper", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
  pagination: {
    el: ".contents .con1 swiper-pagination",
    clickable: true,
  },
});