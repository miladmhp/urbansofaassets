
$(document).ready(function () {
    $(".flexible-panel-section").find(".owl-carousel").each(function () {
        var flexibleOwlState = ($(this).find(".item").length > 1) ? true : false;
        $(this).owlCarousel({
            loop:false,
            margin:0,
            responsiveClass:true,
            dots:true,
            nav:flexibleOwlState,
            mouseDrag: flexibleOwlState,
            touchDrag: flexibleOwlState,
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


    var productCarouselItems = ($(".product .owl-carousel .item").length > 1) ? true : false;


    $('.product .owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        dots:true,
        nav:productCarouselItems,
        mouseDrag: productCarouselItems,
        touchDrag: productCarouselItems,
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

    var productCarouselState = ($(".product-carousel .owl-carousel .item").length > 1) ? true : false;

	$('.product-carousel .owl-carousel').owlCarousel({
		loop:false,
        responsiveClass:true,
        dots:true,
        margin:0,
        nav:productCarouselState,
        mouseDrag: productCarouselState,
        touchDrag: productCarouselState,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            767:{
                items:2,
                margin:50
            },
            992:{
                items:2,
                margin:50
            }
        }
	});

    var dealerCarouselState = ($(".owl-carousel.dealer-carousel .item").length > 1) ? true : false;

    $('.owl-carousel.dealer-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        dots:true,
        nav:dealerCarouselState,
        mouseDrag: dealerCarouselState,
        touchDrag: dealerCarouselState,
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
            992:{
                items:1
            }
        }
    });

	$('iframe').each(function () {
        $(this).height( $(this).width() * 9/16 );
    });

    $(".half-width-image").each(function () {
        if ( $(this).next("div").hasClass("description-col") ) {
            $(this).next("div").removeClass("pr-lg-5").addClass("pl-lg-5 description-col-right");
        }
    });
});

$(window).resize(function () {
    $('iframe').each(function () {
        $(this).height( $(this).width() * 9/16 );
    });
});

$(window).on('load resize', function () {
    if($(window).width() >= 1200) {
        $('.description-col').css('padding-left', ($(window).width() - 1140 ) / 2 + 15 );
        setTimeout(function () {
            $('.description-col.description-col-right').css('padding-right', ($(window).width() - 1140 ) / 2 + 15 );
        },100);

    }else if(  991 > $(window).width() < 1200) {
        $('.description-col').css('padding-left', ($(window).width() - 960 ) / 2 );
        setTimeout(function () {
            $('.description-col.description-col-right').css('padding-right', ($(window).width() - 960 ) / 2 );
        },100);
    }
    if ($(window).width() < 576) {
        $("#store-map").parent().css("cssText", "padding-right: 0px !important;padding-left: 0px !important;");
    }
});

$(document).on("click", '.show-more', function(event) {
	event.preventDefault();
	var moreTextLabel = $(this).data("label_more");
	var lessTextLabel = $(this).data("label_less");
	$(this).closest(".row").find('#' + $(this).data('more')).toggleClass('show');
	$(this).toggleClass('active');
	if ($(this).hasClass('active')) {
		$(this).html(lessTextLabel);
	} else {
		$(this).html(moreTextLabel);
	}
});
