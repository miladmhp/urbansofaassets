$(document).ready(function () {
    $(".owl-carousel.visual-carousel").each(function () {
        var visualOwlState = ($(this).find(".item").length > 1) ? true : false;
        $(this).owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            dots:false,
            nav:visualOwlState,
            mouseDrag: visualOwlState,
            touchDrag: visualOwlState,
            autoplay:true,
            autoplayTimeout:8000,
            autoplayHoverPause:true,
            navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                767:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    });
});
