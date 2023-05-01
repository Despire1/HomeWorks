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
    } else if ($('.filter-black').hasClass('header__filter-btn--active')) {
      $('header').removeClass('header')
      $('header').addClass('header-bl')
      // $('.wrapper').removeClass('wrapper-wh')
      // $('.wrapper').addClass('wrapper-bl')
    }
  })

  $('.specs__row-item').on('click', function () {
    if ($(this).hasClass('specs__row-item--active') === false) {
      $('.specs__row-item').removeClass('specs__row-item--active')
      $(this).addClass('specs__row-item--active')
    }
  })

  
})