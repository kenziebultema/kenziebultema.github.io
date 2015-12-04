$(document).ready(function() {
        $('.welcome').on('click', 'button', function() {
        $('body').find('header').show();
        $('body').find('section').show();
        $('body').find('footer').show();
        $('button').find('nav').show();
      });
});