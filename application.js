$(document).ready(function() {
  $('.welcome').on('click', function() {
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').show();
  });
  $('.art').on('click', function() {
    $('body').find('header').hide();
    $('body').find('section').hide();
    $('body').find('footer').hide();
    $('body').find('nav').hide();
    $(this).hide();
    $('.done').show();
  });
  $('.done').on('click', function() {
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').show();
  });
});
