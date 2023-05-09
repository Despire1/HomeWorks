
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


document.querySelectorAll('.filter-btn').forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.classList.contains('filter-btn--active') === false) {
    document.querySelectorAll('.filter-btn').forEach(el => el.classList.remove('filter-btn--active'))
    e.currentTarget.classList.add('filter-btn--active')
    if (e.currentTarget.classList.contains('filter-white')) {
      document.querySelectorAll('.filter-white').forEach(el => el.classList.add('filter-btn--active'))
    } else if (e.currentTarget.classList.contains('filter-black')) {
      document.querySelectorAll('.filter-black').forEach(el => el.classList.add('filter-btn--active'))
    }
  }

  if (document.querySelector('.filter-white').classList.contains('filter-btn--active')) {
    document.querySelector('.wrapper').classList.replace('black', 'white')
    document.querySelector(':root').style.cssText = '--bg-color: #222222; --wh-to-orng: #F1F1F1; --wh-to-bl: #F1F1F1; --bl-to-wh: #151515; --orng-to-bl: #FF4C0D';
  } else if (document.querySelector('.filter-black').classList.contains('filter-btn--active')) {
    document.querySelector('.wrapper').classList.replace('white', 'black')
    document.querySelector(':root').style.cssText = '--orng-to-bl: #151515; --bg-color: #E0E0E0; --wh-to-orng: #FF4C0D; --bl-to-wh: #F1F1F1; --wh-to-bl: #151515';
  }
}))


if (document.documentElement.clientWidth > 1100) {
  document.querySelector('.specs__row-item:first-child').classList.add('specs__row-item--active')
  document.querySelector('.safety__row-item:first-child').classList.add('safety__row-item--active')
  document.querySelectorAll('.specs__row-item').forEach(el => el.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('specs__row-item--active') === false) {
      document.querySelectorAll('.specs__row-item').forEach(el => el.classList.remove('specs__row-item--active'))
      e.currentTarget.classList.add('specs__row-item--active')
    }
  }))
  document.querySelectorAll('.safety__row-item').forEach(el => el.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('safety__row-item--active') === false) {
      document.querySelectorAll('.safety__row-item').forEach(el => el.classList.remove('safety__row-item--active'))
      e.currentTarget.classList.add('safety__row-item--active')
    }
  }))
}


var swiper = new Swiper('.slider1', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    640: {
      direction: "vertical",
    },
    1: {
      direction: "horizontal"
    }
  }
});

var swiper2 = new Swiper('.slider2', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: false,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-paginations',
        type: 'bullets',
        clickable: true,
      },
    }

  },


});

document.querySelectorAll('.questions__item-link').forEach(el => el.addEventListener('click', e => {
  e.preventDefault()
  if (e.currentTarget.classList.contains('questions__item--active')) {
    e.currentTarget.classList.remove('questions__item--active')
  } else {
    document.querySelectorAll('.questions__item-link').forEach(el => el.classList.remove('questions__item--active'))
    e.currentTarget.classList.add('questions__item--active')
  }
}))


document.querySelectorAll('.burger, .overlay, .header__top a').forEach(el => el.addEventListener('click', e => {
  document.querySelector('.burger').classList.toggle('burger-open')
  document.querySelector('.header__top').classList.toggle('header__top-open')
  if (document.documentElement.clientWidth < 480) {
    if (document.querySelector('.header__top').classList.contains('header__top-open')) {
      document.querySelector(".header__logo--show").style.cssText = 'position', 'fixed'
    } else {
      document.querySelector(".header__logo--show").style.cssText = 'position', 'absolute'
    }
  }
  document.querySelector('.overlay').classList.toggle('overlay-show')

  if (document.querySelector('.header__top').classList.contains('header__top-open') && document.documentElement.clientWidth < 1100) {
    document.querySelector('body, html').style.cssText = 'overflow: hidden'
  } else {
    document.querySelector('body, html').style.cssText = 'overflow: visible'
  }
}))




// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------