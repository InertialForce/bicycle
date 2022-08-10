const nameBicycle = document.querySelectorAll('.bicycles__item');
const itemCards = document.querySelectorAll('.cards__items');
const prevBtn = document.querySelector('.slider__button_type_prev');
const nextBtn = document.querySelector('.slider__button_type_next');
const slideItems = document.querySelectorAll('.slider__item');
const switchBtn = document.querySelector('.footer__switch-btn');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const colorWhite = document.querySelectorAll('.color-white');
const colorGrey = document.querySelectorAll('.color-grey');
const sliderButtons = document.querySelectorAll('.slider__button');
const sliderButtonsImg = document.querySelectorAll('.slider__button-img');
const aboutSiteLine = document.querySelector('.about-site__line');
const footer = document.querySelector('.footer');
const switchImg = document.querySelectorAll('.footer__switch-image');
const footerCopyright = document.querySelector('.footer__copyright');
const formEmail = document.querySelector('.form__email');
const formSubmit = document.querySelector('.form__submit');

function slider() {
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

function switchTheme() {
  switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('footer__switch-btn_on');
    page.classList.toggle('theme-dark');
    header.classList.toggle('theme-dark__header');
    sliderButtons.forEach(item => {
      item.classList.toggle('theme-dark__button');
    });

    colorWhite.forEach(item => {
      item.classList.toggle('theme-dark__color-white');
    });

    colorGrey.forEach(item => {
      item.classList.toggle('theme-dark__color-grey');
    });

    sliderButtonsImg.forEach(item => {
      item.classList.toggle('theme-dark__button-img');
    });

    switchImg.forEach(item => {
      item.classList.toggle('theme-dark__switch-image');
    });
    footerCopyright.classList.toggle('theme-dark__copyright');
    aboutSiteLine.classList.toggle('theme-dark__line');
    footer.classList.toggle('theme-dark__footer');
  })
}

function showBtn () {
  formEmail.addEventListener('focus', () => {
    formSubmit.classList.add('form__submit_active');
    formEmail.placeholder = 'Ваш e-mail';
  });

  formSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    formSubmit.classList.remove('form__submit_active');
    formEmail.placeholder = 'Круто!';
    formEmail.value = '';
  })
}

slider();
sliderBike();
switchTheme();
showBtn();
