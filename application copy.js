$(document).ready(function() {
  $('.welcome').on('click', 'button', function() {
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').find('button').show();
  });
  $('.art').on('click', 'button', function() {
    $('body').find('header').hide();
    $('body').find('section').hide();
    $('body').find('footer').hide();
    $('body').find('nav').hide();
    $(this).hide();
    $('.done').find('button').show();
  });
  $('.done').on('click', 'button', function() {
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').find('button').show();
  });
});