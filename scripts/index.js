function slider() {
  const prevBtn = document.querySelector('.slider__button_type_prev');
  const nextBtn = document.querySelector('.slider__button_type_next');
  const slideItems = document.querySelectorAll('.slider__item');

  let index = 0;

  const activeSlide = n => {
    for (let slide of slideItems) {
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

function sliderBike() {
  const nameBicycle = document.querySelectorAll('.bicycles__item');
  const itemCards = document.querySelectorAll('.cards__items');

  let index = 0;

  const activeItemCards = n => {
    for (let item of itemCards) {
      item.classList.remove('cards__items_active');
    }

    itemCards[n].classList.add('cards__items_active');
  }

  const activeNameBicycle = n => {
    for (let name of nameBicycle) {
      name.classList.remove('bicycles__item_active');
    }

    nameBicycle[n].classList.add('bicycles__item_active');
  }

  const prepareCurrentItem = ind => {
    activeItemCards(ind);
    activeNameBicycle(ind);
  }

  nameBicycle.forEach((item, indexItem) => {
    item.addEventListener('click', () => {
      index = indexItem;
      prepareCurrentItem(index);
    })
  })
}

slider();
sliderBike();
