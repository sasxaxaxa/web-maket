const sliders = document.querySelectorAll('.route__slider');

sliders.forEach((slider, index) => {

  new Swiper(slider, {

    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,

    initialSlide: index === 1 ? 2 : 0,

    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true
    },
    on: {
      init: hideLeftSlides,
      slideChange: hideLeftSlides
    }

  });
  function hideLeftSlides(swiper) {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    slides.forEach((slide, index) => {
      if (index < activeIndex) {
        slide.style.opacity = "0";
        slide.style.pointerEvents = "none";
      } else {
        slide.style.opacity = "1";
      }
    });
  }

});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('accordion-item--active');

    accordionItems.forEach(el => {
      el.classList.remove('accordion-item--active');
    });

    if (!isOpen) {
      item.classList.add('accordion-item--active');
    }
  });
});