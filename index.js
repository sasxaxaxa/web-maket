const sliders = document.querySelectorAll('.route__slider');

sliders.forEach((slider, index) => {

  new Swiper(slider, {

    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,

    initialSlide: index === 1 ? 2 : 0, // второй блок открывается с 3 картинки

    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true
    }

  });

});