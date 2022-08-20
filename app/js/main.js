$(function(){
    $('.header__burger').on('click', function(){
        $('.header__menu-list').toggleClass('header__menu-list--active');

        $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__burger").length) {
            $('.header__menu-list').toggleClass('header__menu-list--active');
        }
        e.stopPropagation();
        });
    })
    
})