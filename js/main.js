$(function () {

  $('.filter-btn').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('filter-btn--active') === false) {
      $('.filter-btn').removeClass('filter-btn--active')
      $(this).addClass('filter-btn--active')
    }
    if ($('.filter-white').hasClass('filter-btn--active')) {
      $('.container').removeClass('container-bl')
      $('.container').addClass('container-wh')
      $(':root').css('--bg-color', '#222222')
      $(':root').css('--title-color', '#F1F1F1')
      $('.sale__inner').removeClass('sale__inner-bl')
    } else if ($('.filter-black').hasClass('filter-btn--active')) {
      $('.container').removeClass('container-wh')
      $('.container').addClass('container-bl')
      $(':root').css('--bg-color', '#F1F1F1')
      $(':root').css('--title-color', '#FF4C0D')
      $('.sale__inner').addClass('sale__inner-bl')
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

})