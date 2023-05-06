$(function () {

  $('.filter-btn').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('filter-btn--active') === false) {
      $('.filter-btn').removeClass('filter-btn--active')
      $(this).addClass('filter-btn--active')
      if ($(this).hasClass('filter-white')) {
        $('.filter-white').addClass('filter-btn--active')
      } else if ($(this).hasClass('filter-black')) {
        $('.filter-black').addClass('filter-btn--active')
      }
    }
    if ($('.filter-white').hasClass('filter-btn--active')) {
      $('.container').removeClass('container-bl')
      $('.container').addClass('container-wh')
      $(':root').css('--bg-color', '#222222')
      $(':root').css('--wh-to-orng', '#F1F1F1')
      $(':root').css('--wh-to-bl', '#F1F1F1')
      $(':root').css('--bl-to-wh', '#151515')
      $(':root').css('--orng-to-bl', '#FF4C0D')
      $('.sale__inner').removeClass('sale__inner-bl')
      $('.app__image-box').css('display', 'block')
      $('.app__image-box-wh').css('display', 'none')
      $('.header__body-filter').removeClass('header__body-filter-bl')
      $('.header__body-filter').addClass('header__body-filter-wh')
    } else if ($('.filter-black').hasClass('filter-btn--active')) {
      $('.container').removeClass('container-wh')
      $('.container').addClass('container-bl')
      $(':root').css('--bg-color', '#E0E0E0')
      $(':root').css('--wh-to-orng', '#FF4C0D')
      $(':root').css('--wh-to-bl', '#151515')
      $(':root').css('--bl-to-wh', '#F1F1F1')
      $(':root').css('--orng-to-bl', '#151515')
      $('.sale__inner').addClass('sale__inner-bl')
      $('.app__image-box').css('display', 'none')
      $('.app__image-box-wh').css('display', 'block')
      $('.header__body-filter').removeClass('header__body-filter-wh')
      $('.header__body-filter').addClass('header__body-filter-bl')
    }
  })
  if ($(window).width() > 1100) {
    $('.specs__row-item:first-child').addClass('specs__row-item--active')
    $('.safety__row-item:first-child').addClass('safety__row-item--active')
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
  }

  $('.image__slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
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
  
  $('.questions__item-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__item--active')) {
      $(this).removeClass('questions__item--active')
      $(this).children('.questions__item-text').slideUp('questions__item-text')
    } else {
      $('.questions__item-link').removeClass('questions__item--active')
      $('.questions__item-text').slideUp()
      $(this).addClass('questions__item--active')
      $(this).children('.questions__item-text').slideDown('questions__item-text')
    }
  })

  $('.header__top-link, .header__btn').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),

        top = $(id).offset().top - 15

    $('body,html').animate({scrollTop: top}, 1000)
  })

  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top-open')
    if ($(window).width() < 480) {
      if ($('.header__top').hasClass('header__top-open')) {
        $(".header__logo--show").css('position', 'fixed')
      } else {
        $(".header__logo--show").css('position', 'absolute')
      }
    }
    $('.overlay').toggleClass('overlay-show')
  })

})