$(document).ready(function () {

    const modal = $('.modal');
    const overlay = modal.find('.modal__overlay');
    const toggleBtnComment = $('.modal__comment-btn');
    
    $('.header__btn').click(function(event) {
    //    event.preventDefault();
        modal.show();

    });
    
    $('.modal__span').click(function() {
     modal.hide();
    });

    overlay.click(function() {
        modal.hide();
    });

    toggleBtnComment.click(function() {
        $('.form__message').toggle();
    })

   
});