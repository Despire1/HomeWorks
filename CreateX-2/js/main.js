$(function () {

  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.rotate').on('click', function () {
    $('.directions__list-item').addClass('directions__list--item--rotate')
    $(this).addClass('rotate-active')
  })

  $('.stop__rotate').on('click', function () {
    $('.directions__list-item').removeClass('directions__list--item--rotate')
    $('.rotate').removeClass('rotate-active')
  })
})
