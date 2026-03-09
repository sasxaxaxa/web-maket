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

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('accordion-item--active');

    // Закрываем все
    accordionItems.forEach(el => {
      el.classList.remove('accordion-item--active');
    });

    // Открываем текущий, если он был закрыт
    if (!isOpen) {
      item.classList.add('accordion-item--active');
    }
  });
});