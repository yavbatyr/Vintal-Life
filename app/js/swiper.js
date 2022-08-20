const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  edgeSwipeDetection: 'false',
  effect: 'slide',
  grabCursor: 'true',
  longSwipesRatio: 0.5,
  containerModifierClass: 'SWIPER-',
  createElements: 'false',
  centerInsufficientSlides: 'false',
  centeredSlides: 'true',
  centeredSlidesBounds: 'false',
  loopAdditionalSlides: 2,
  slidesPerView: 3,
  slideToClickedSlide: true,
  spaceBetween: 50,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    keyboard:{
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    
    // mousewheel:{
    //   sensitivity: 1,
    //   eventsTarget: ".swiper",
    // },
    hashNavigation:{
      watchState: true,
    }
  });  