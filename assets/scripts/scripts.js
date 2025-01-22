$(document).ready(function () {

    $('.qna:first-child .question').addClass('active');
    $('.qna:first-child .answer').slideDown();
        
    $('.question').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.answer').slideToggle();
    });

});