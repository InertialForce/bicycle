function slider() {
  const prevBtn = document.querySelector('.slider__button_type_prev');
  const nextBtn = document.querySelector('.slider__button_type_next');
  const slideItems = document.querySelectorAll('.slider__item');

  let index = 0;

  const activeSlide = n => {
    for (slide of slideItems) {
      slide.classList.remove('slider__item_active');
    }

    slideItems[n].classList.add('slider__item_active');
  }

  const nextSlide = () => {
    if (index === slideItems.length - 1) {
      index = 0;
      activeSlide(index);
    } else {
      index++;
      activeSlide(index);
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      index = slideItems.length - 1;
      activeSlide(index);
    } else {
      index--;
      activeSlide(index);
    }
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
}

slider();
