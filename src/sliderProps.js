import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade]);

export const testimonial_one__carousel = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
};
export const brandSliderProps = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
};

export const singleSlide = {
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
};

export const home3SliderProps = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 800,
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
};

export const portfolioDetailsSlider = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    991: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
};
