const sliders = document.querySelectorAll('.route__slider');

sliders.forEach((slider, index) => {

  const isAdvanced = slider.closest('.advanced-route');

  new Swiper(slider, {

    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,

    initialSlide: index === 1 ? 2 : 0,

    on: {
      init: updateSlides,
      slideChange: updateSlides
    }

  });

  function updateSlides(swiper) {

    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    slides.forEach((slide, i) => {

      // base-route → скрываем левые
      if (!isAdvanced) {
        if (i < activeIndex) {
          slide.style.opacity = "0";
          slide.style.pointerEvents = "none";
        } else {
          slide.style.opacity = "1";
          slide.style.pointerEvents = "auto";
        }
      }

      // advanced-route → скрываем правые
      else {
        if (i > activeIndex) {
          slide.style.opacity = "0";
          slide.style.pointerEvents = "none";
        } else {
          slide.style.opacity = "1";
          slide.style.pointerEvents = "auto";
        }
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