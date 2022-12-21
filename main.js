$(function () {
  var height = $(window).height();
  $('.menu__item_contacts').click(function () {
    $(window).scrollTop(height);
  });
  $('.howcreate').click(function () {
    $('#modal').fadeIn();
  });
  $('#modal').click(function () {
    $('#modal').fadeOut();
  });
})
