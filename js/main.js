$(function () {

  $('.header__filter-btn').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('header__filter-btn--active') === false) {
      $('.header__filter-btn').removeClass('header__filter-btn--active')
      $(this).addClass('header__filter-btn--active')
    }
    if ($('.filter-white').hasClass('header__filter-btn--active')) {
      $('header').removeClass('header-bl')
      $('header').addClass('header')
      // $('.wrapper').removeClass('wrapper-bl')
      // $('.wrapper').addClass('wrapper-wh')
      $(':root').css('--bg-color', '#222222')
      $(':root').css('--title-color', '#F1F1F1')
    } else if ($('.filter-black').hasClass('header__filter-btn--active')) {
      $('header').removeClass('header')
      $('header').addClass('header-bl')
      // $('.wrapper').removeClass('wrapper-wh')
      // $('.wrapper').addClass('wrapper-bl')
      $(':root').css('--bg-color', '#F1F1F1')
      $(':root').css('--title-color', '#FF4C0D')
    }
  })

  $('.specs__row-item').on('click', function () {
    if ($(this).hasClass('specs__row-item--active') === false) {
      $('.specs__row-item').removeClass('specs__row-item--active')
      $(this).addClass('specs__row-item--active')
    }
  })
  $('.safety__row-item').on('click', function () {
    if ($(this).hasClass('safety__row-item--active') === false) {
      $('.safety__row-item').removeClass('safety__row-item--active')
      $(this).addClass('safety__row-item--active')
    }
  })

  $('.image__slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
  })
  $('.reviews__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
  })

  $('.reviews__arrow--prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__arrow--next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
  
})