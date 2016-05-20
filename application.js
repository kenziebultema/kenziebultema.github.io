
$(document).ready(function(){
    $('.welcome').on('click', 'button', showResume);
    $('.art').on('click', 'button', hideResume);
    $('.done').on('click', 'button', showResume);
});

function showResume(){
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').find('button').show();
  };

function hideResume(){
    $('body').find('header').hide();
    $('body').find('section').hide();
    $('body').find('footer').hide();
    $('body').find('nav').hide();
    $(this).hide();
    $('.done').find('button').show();
  });
