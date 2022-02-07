// $(document).ready(function () {
//     $('.slider').slick({
//         dots: true,
//         arows: true,
//         // centerMode: true,
//         slidesToShow: 3,
//         //  autoplay: true,

//     });
// });
$(window).ready(function () {
    $(".header-burger").click(function () {
        $(".header-burger, .nav, .header, .header__content").toggleClass("activ");
    });

});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        //clearHeader, not clearheader - caps H
        $(".header").addClass("down");
    } else {
        $(".header").removeClass("down");
    }
});