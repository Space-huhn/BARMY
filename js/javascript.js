$(document).ready(function () {
    $('.slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        asNavFor: '.slider-bottom',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    asNavFor: '',
                    swipeToSlide: true,
                }
            }
        ]
    });
    $('.slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-top',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    asNavFor: '',
                }
            }
        ]
    });
});


$(window).ready(function () {
    $(".header-burger").click(function () {
        $(".header-burger, .menu__list, body").toggleClass("activ");
    });

});

// $(document).scroll(function () {
//     var scroll = $(document).scrollTop();
//     if (scroll >= 50) {
//         $(".memu, .logo, .header-burger").addClass("down");
//     } else {
//         $(".memu, .logo, .header-burger").removeClass("down");
//     }
// });

// $(window).ready(function () {
//     $('header').on('.activ', function () {
//         $(".wrapper").addClass("overh");
//     });

// });

// $('header').on('.activ', function () {
//     $(body).css("overflow", "hidden");
// })
// //.on('mouseleave', function () {
// //     $("body").css("overflow","auto");
// //  });