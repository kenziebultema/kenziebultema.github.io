$(document).ready(function(){
    $('.welcome').on('click', 'button', showResume);
    $('.art').on('click', 'button', hideResume);
    $('.done').on('click', 'button', showResume);
    // $('.work').on('click', 'h2', slideUp);
    $('.work').on('click', 'h2', dropDown);

    $('.work').find('ul').hide();

});

function showResume(){
    $('body').find('header').show();
    $('body').find('section').show();
    $('body').find('footer').show();
    $('body').find('nav').show();
    $(this).hide();
    $('.art').find('button').show();
}

function hideResume(){
    $('body').find('header').hide();
    $('body').find('section').hide();
    $('body').find('footer').hide();
    $('body').find('nav').hide();
    $(this).hide();
    $('.done').find('button').show();
}

// function slideUp(){
//     $(this).toggleClass('drop');
//     $(this).find('li').slideUp();
// }

function dropDown(){
    $(this).toggleClass('drop');
    $(this).next().slideToggle();
    console.log(this);
}
