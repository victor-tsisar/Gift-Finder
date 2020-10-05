"use strict";

$(document).ready(function () {
    var menu = $(".modal");
    var menuBtn = $(".main-btn");
    var menuClose = $(".modal__close");

    menuBtn.on('click', function () {
        menu.addClass("active");
    });

    menuClose.on('click', function () {
        menu.removeClass("active");
    });

    $('.blog__items').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 999,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    adaptiveHeight: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                }
            }
        ]
    });

    $("a#gallery-image").fancyboxPlus({
        'transitionIn': 'elastic',
        'autoDimensions': true,
    });
});
