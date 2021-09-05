$(document).ready(function () {
    $('.header__btn').click(function(event) {
       event.preventDefault();
       $('.modal').show();
       $('.modal__span').click(function() {
        $('.modal').hide();

        if(event.target != '.modal') {
            $('.modal').hide();
        }
       });
     
            console.log('work   ')
		});
});