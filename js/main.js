
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
    document.querySelectorAll('.container').forEach(el => el.classList.remove('container-bl'))
    document.querySelectorAll('.container').forEach(el => el.classList.add('container-wh'))
    document.querySelector(':root').style.cssText = '--bg-color: #222222; --wh-to-orng: #F1F1F1; --wh-to-bl: #F1F1F1; --bl-to-wh: #151515; --orng-to-bl: #FF4C0D';
    document.querySelector('.sale__inner').classList.remove('sale__inner-bl')
    document.querySelector('.app__image-box').style.cssText = 'display: block';
    document.querySelector('.app__image-box-wh').style.cssText = 'display: none';
    document.querySelector('.header__body-filter').classList.remove('header__body-filter-bl')
    document.querySelector('.header__body-filter').classList.add('header__body-filter-wh')
    document.querySelector('.sale__body-filter').classList.remove('sale__body-filter-bl')
    document.querySelector('.sale__body-filter').classList.add('sale__body-filter-wh')
    document.querySelector('.mb-bike-box').classList.remove('mb-bike-box-bl')
    document.querySelector('.mb-bike-box').classList.add('mb-bike-box-wh')
  } else if (document.querySelector('.filter-black').classList.contains('filter-btn--active')) {
    document.querySelectorAll('.container').forEach(el => el.classList.remove('container-wh'))
    document.querySelectorAll('.container').forEach(el => el.classList.add('container-bl'))
    document.querySelector(':root').style.cssText = '--orng-to-bl: #151515; --bg-color: #E0E0E0; --wh-to-orng: #FF4C0D; --bl-to-wh: #F1F1F1; --wh-to-bl: #151515';
    document.querySelector('.sale__inner').classList.add('sale__inner-bl')
    document.querySelector('.app__image-box').style.cssText = 'display: none';
    document.querySelector('.app__image-box-wh').style.cssText = 'display: block';
    document.querySelector('.header__body-filter').classList.remove('header__body-filter-wh')
    document.querySelector('.header__body-filter').classList.add('header__body-filter-bl')
    document.querySelector('.sale__body-filter').classList.remove('sale__body-filter-wh')
    document.querySelector('.sale__body-filter').classList.add('sale__body-filter-bl')
    document.querySelector('.mb-bike-box').classList.remove('mb-bike-box-wh')
    document.querySelector('.mb-bike-box').classList.add('mb-bike-box-bl')
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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

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
  e.preventDefault()
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
  if (document.querySelector('.header__top').classList.contains('header__top-open')) {
    document.querySelector('body, html').style.cssText = 'overflow: hidden'
  } else {
    document.querySelector('body, html').style.cssText = 'overflow: visible'
  }
}))




// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// $(function () {


//   $('.filter-btn').on('click', function (e) {
//     e.preventDefault()
//     if ($(this).hasClass('filter-btn--active') === false) {
//       $('.filter-btn').removeClass('filter-btn--active')
//       $(this).addClass('filter-btn--active')
//       if ($(this).hasClass('filter-white')) {
//         $('.filter-white').addClass('filter-btn--active')
//       } else if ($(this).hasClass('filter-black')) {
//         $('.filter-black').addClass('filter-btn--active')
//       }
//     }

//     if ($('.filter-white').hasClass('filter-btn--active')) {
//       $('.container').removeClass('container-bl')
//       $('.container').addClass('container-wh')
//       $(':root').css('--bg-color', '#222222')
//       $(':root').css('--wh-to-orng', '#F1F1F1')
//       $(':root').css('--wh-to-bl', '#F1F1F1')
//       $(':root').css('--bl-to-wh', '#151515')
//       $(':root').css('--orng-to-bl', '#FF4C0D')
//       $('.sale__inner').removeClass('sale__inner-bl')
//       $('.app__image-box').css('display', 'block')
//       $('.app__image-box-wh').css('display', 'none')
//       $('.header__body-filter').removeClass('header__body-filter-bl')
//       $('.header__body-filter').addClass('header__body-filter-wh')
//       $('.sale__body-filter').removeClass('sale__body-filter-bl')
//       $('.sale__body-filter').addClass('sale__body-filter-wh')
//       $('.mb-bike-box').removeClass('mb-bike-box-bl')
//       $('.mb-bike-box').addClass('mb-bike-box-wh')
//     } else if ($('.filter-black').hasClass('filter-btn--active')) {
//       $('.container').removeClass('container-wh')
//       $('.container').addClass('container-bl')
//       $(':root').css('--bg-color', '#E0E0E0')
//       $(':root').css('--wh-to-orng', '#FF4C0D')
//       $(':root').css('--wh-to-bl', '#151515')
//       $(':root').css('--bl-to-wh', '#F1F1F1')
//       $(':root').css('--orng-to-bl', '#151515')
//       $('.sale__inner').addClass('sale__inner-bl')
//       $('.app__image-box').css('display', 'none')
//       $('.app__image-box-wh').css('display', 'block')
//       $('.header__body-filter').removeClass('header__body-filter-wh')
//       $('.header__body-filter').addClass('header__body-filter-bl')
//       $('.sale__body-filter').removeClass('sale__body-filter-wh')
//       $('.sale__body-filter').addClass('sale__body-filter-bl')
//       $('.mb-bike-box').removeClass('mb-bike-box-wh')
//       $('.mb-bike-box').addClass('mb-bike-box-bl')
//     }
//   })


//   if ($(window).width() > 1100) {
//     $('.specs__row-item:first-child').addClass('specs__row-item--active')
//     $('.safety__row-item:first-child').addClass('safety__row-item--active')
//     $('.specs__row-item').on('click', function () {
//       if ($(this).hasClass('specs__row-item--active') === false) {
//         $('.specs__row-item').removeClass('specs__row-item--active')
//         $(this).addClass('specs__row-item--active')
//       }
//     })
//     $('.safety__row-item').on('click', function () {
//       if ($(this).hasClass('safety__row-item--active') === false) {
//         $('.safety__row-item').removeClass('safety__row-item--active')
//         $(this).addClass('safety__row-item--active')
//       }
//     })
//   }

//   // if ($(window).width() < 640) {
//   //   $('.image__slider').slick({
//   //     arrows: false,
//   //     infinite: true,
//   //     dots: true,
//   //     autoplay: false,
//   //     autoplaySpeed: 4000,
//   //     vertical: false,
//   //     verticalSwiping: false,
//   //   })
//   // }

//   $('.image__slider').slick({
//     arrows: false,
//     infinite: true,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     vertical: true,
//     verticalSwiping: true,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           vertical: false,
//           verticalSwiping: false,
//         }
//       }]
//   })
//   $('.reviews__slider').slick({
//     arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//         }
//       }]
//   })

//   $('.reviews__arrow--prev').on('click', function (e) {
//     e.preventDefault()
//     $('.reviews__slider').slick('slickPrev')
//   })
//   $('.reviews__arrow--next').on('click', function (e) {
//     e.preventDefault()
//     $('.reviews__slider').slick('slickNext')
//   })

//   $('.questions__item-link').on('click', function (e) {
//     e.preventDefault()
//     if ($(this).hasClass('questions__item--active')) {
//       $(this).removeClass('questions__item--active')
//       $(this).children('.questions__item-text').slideUp('questions__item-text')
//     } else {
//       $('.questions__item-link').removeClass('questions__item--active')
//       $('.questions__item-text').slideUp()
//       $(this).addClass('questions__item--active')
//       $(this).children('.questions__item-text').slideDown('questions__item-text')
//     }
//   })

//   $('.header__top-link, .header__btn').on('click', function (e) {
//     e.preventDefault()
//     var id = $(this).attr('href'),

//       top = $(id).offset().top - 15

//     $('body,html').animate({ scrollTop: top }, 1000)
//   })

//   $('.burger, .overlay, .header__top a').on('click', function (e) {
//     e.preventDefault()
//     $('.burger').toggleClass('burger-open')
//     $('.header__top').toggleClass('header__top-open')
//     if ($(window).width() < 480) {
//       if ($('.header__top').hasClass('header__top-open')) {
//         $(".header__logo--show").css('position', 'fixed')
//       } else {
//         $(".header__logo--show").css('position', 'absolute')
//       }
//     }
//     $('.overlay').toggleClass('overlay-show')
//     if ($('.header__top').hasClass('header__top-open')) {
//       $('body, html').css('overflow', 'hidden')
//     } else {
//       $('body, html').css('overflow', 'visible')
//     }
//   })


// })