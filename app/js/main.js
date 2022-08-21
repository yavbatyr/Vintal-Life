$(function(){
    $('.header__burger, .header__burger-dark').on('click', function(){
        $('.header__menu-list').toggleClass('header__menu-list--active');

        $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__burger").length) {
            $('.header__menu-list').toggleClass('header__menu-list--active');
        }
        e.stopPropagation();
        });
    })
    $('.header__theme').on('click', function(){
        $('body, .header__burger, .header__burger-dark, .header__top-title-img, .header__top-title-img-dark, .absolute, .header__logo, .header__logo-dark, .header__feedback, .header__btn, .header__bottom-text, .benefits__line, .title, subtitle, .feedback__text, .phrase, .feedback__form-item, .location__address-btn-text, label[for="request-btn"]').toggleClass('dark--theme');
            var $this = $('.header__theme-icon circle, .header__bottom-social-link path, .swiper-button-prev path, .swiper-button-next path');
            var isRed = !$this.data("isRed");
            $this.data("isRed", isRed);
            $('.header__theme-icon circle, .header__bottom-social-link path, .swiper-button-prev path, .swiper-button-next path').css("fill", isRed ? "#fff" : "");

            var $this = $('.header__theme-icon path');
            var isRed = !$this.data("isRed");
            $this.data("isRed", isRed);
            $('.header__theme-icon path').css("fill", isRed ? "#2d2d2d" : "");


    })
    

    })
    // $(function(){
    //     // при клике на элемент с id="mydiv"
    //     $('.slider-title-wrapper').mouseenter(function(){
    //         // получаем координату top
    //         var top = $('.slider-title').offset().top;
    //         var bottom = $('.slider-subtitle').offset().top;
    //         // изменяем координаты элемента, а имеено увеличиваем их на 50px
    //         $(this).offset({top: top - 100});
    //         $(this).offset({bottom: bottom - 150});
    //     });
    //     $('.slider-title-wrapper').mouseleave(function(){
    //         // получаем координату top
    //         var top = $('.slider-title').offset().top;
    //         var bottom = $('.slider-subtitle').offset().top;
    //         // изменяем координаты элемента, а имеено увеличиваем их на 50px
    //         $(this).offset({top: top + 100});
    //         $(this).offset({bottom: bottom + 150});
    //     });
    // });
// })
