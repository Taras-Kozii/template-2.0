'use strict';

export function initSlider() {
  const slider = new Swiper(".slider-gallery", {
    navigation: {
      nextEl: ".slider-gallery__next",
      prevEl: ".slider-gallery__prev" 
    },
    pagination: {
      el: '.slider-gallery__dots',
      type: 'bullets',
      clickable: true,
      dynamicBullets: false,
    },
    autoHeight: true,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    initialSlide: 2,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    loop: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: { 
      1024: { slidesPerView: 3 }
    },
  });
  const sliderPlaces = new Swiper(".places-slider__body", {
    navigation: {
      nextEl: ".places-slider__next",
      prevEl: ".places-slider__prev" 
    },
    autoHeight: true,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    initialSlide: 1,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    spaceBetween: 16,
    slidesPerView: 1.5,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: { 
      1024: { 
        slidesPerView: 3,
        spaceBetween: 24, 
      }
    },
  });
}
