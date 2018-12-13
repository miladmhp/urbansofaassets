


function owlInit() {
    var fabricOwlCarouselState = ($(".fabrics .owl-carousel .item").length > 1) ? true : false;
    var carouselOptions = {
        loop: false,
        margin: 0,
        responsiveClass: true,
        dots: false,
        center: true,
        lazyLoad:false,
        mouseDrag: fabricOwlCarouselState,
        touchDrag: fabricOwlCarouselState,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        nav: fabricOwlCarouselState,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            767: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    };


    var fabricOwl = $('.fabrics .owl-carousel').owlCarousel(carouselOptions);

    fabricOwl.on('changed.owl.carousel', function (event) {
        bLazy.revalidate();
        var carouselId = $(event.target).data('id');
        setTimeout(function () {
            var item = $(event.target).find(".active.center").children("a.item").data("item"); // Owl reported position of the current item (inconsistent and inaccurate)
            var currentNav = $(".nav[data-nav='" + carouselId + "']");
            currentNav.find("img.active").removeClass("active");
            currentNav.find("img[data-slide="+ item +"]").addClass("active");
            var colorTitle =  currentNav.find("img[data-slide="+ item +"]").data("title");
            var element = event.target.closest(".card");
            $(".color-title", element).text(colorTitle);
        },100);
    });

    $(".fabrics_container").find(".fabric-slider").each(function () {
        var activeColorName = $(this).find(".nav img.active").data("title");
        var thisCard = $(this).closest(".card");
        $(".color-title", thisCard).text(activeColorName);
    });
}


function changeSliderImg(event) {
    var slide = $(event.target).data('slide');
    var imagesLength = $(event.target).closest(".nav").children().length;
    // if( imagesLength < 3 ) {
    var slideItem = $(event.target).parent().parent().find('.owl-carousel').find(".owl-item .item[data-item='"+ slide +"']").parent().index();
    // }else if (imagesLength % 2 === 0) {
    //     var slideItem = $(event.target).parent().parent().find('.owl-carousel').find(".owl-item .item[data-item='"+ slide +"']").parent().index() + imagesLength/2;
    // }else {
    //     var slideItem = Math.round($(event.target).parent().parent().find('.owl-carousel').find(".owl-item .item[data-item='"+ slide +"']").parent().index() + imagesLength/2 - 1);
    // }
    $(event.target).parent().parent().find('.owl-carousel').trigger('to.owl.carousel', slideItem );
    setTimeout(function () {
        bLazy.revalidate();
        setTimeout(function () {
            $(window).scrollTop($(window).scrollTop()+1);
            $(window).scrollTop($(window).scrollTop()-1);
        },700);
    },200);
}

$(document).ready(function () {
    owlInit();
    setTimeout(function () {
        bLazy.revalidate();
        $(".gallery").lightGallery({
            selector:".item",
            loop:false,
            cssEasing: 'ease',
            download: false,
            counter:false,
            slideEndAnimatoin:false,
            hideControlOnEnd:true,
            mode: 'lg-lollipop'
        });
    },300);
});


