$(document).ready(function() {
      $('body').on('mouseleave', function() {
        $(this).find('header').hide();
        $(this).find('section').hide();
        $(this).find('footer').hide();
        $(this).find('nav').hide();
      });
        $('body').on('mouseenter', function() {
        $(this).find('header').hide();
        $(this).find('section').hide();
        $(this).find('footer').hide();
        $(this).find('nav').hide();
      });
});