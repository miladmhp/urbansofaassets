

$(document).ready(function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') == -1) {
            $("nav.small-menu").find("div.menu ul").addClass("pb-75");
            if( $("#date-input") ) {
                $("#date-input").removeAttr("type");
                $("#date-input").attr("data-provide", "datepicker");
            }
            $(".bottom-bar .bottom-col").addClass("safari-col");
            $(".usp").css("text-align", "center");
            $(".usp div").css("width", "33%");
            $('#dealer-map').css('width', '91%');
            $('#dealer-map').css('height', '98%');
        } else {
        }
    }
    paceOptions = {
    	ajax:true
	}
        checkNavbar();

	$("section[bg-url]").each(function () {
		var bgUrl = $(this).attr("bg-url");
		$(this).css("background-image", "url("+ bgUrl +")");
    });

    $('.input-group #date-input[data-provide="datepicker"]').datepicker({
        language: 'nl',
        endDate: '+0d',
        autoclose: true,
		format: 'dd-mm-yyyy'
    });

    if ( $('.input-group #date-input[type="date"]') ) {
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;     // getMonth() is zero-based
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();

        var maxDate = year + '-' + month + '-' + day;
        $('.input-group #date-input[type="date"]').attr('max', maxDate);
    }




});

$(window).scroll(function (event) {
	checkNavbar();
});

function checkNavbar () {
	var scroll = $(window).scrollTop();

	if (scroll > 0) {
		$('nav').addClass('stick');
	}
	if (scroll == 0) {
		$('nav').removeClass('stick')
	}
}

function checkBodyOverflow () {
	if ( $('#toggle').hasClass('is-active') || $('section.filters').hasClass('active') ) {
		$('body').css('overflow', 'hidden');
	} else {
		$('body').css('overflow-y', 'auto');
	}
}

$( "#related_select" ).change(function() {
    if ( $("#related_select option:last-child").is(':selected') ) {
    	$("#related_input").css({
			"display" : "flex",
			"visibility" : "visible"
		});
    }else  {
        $("#related_input").css({
            "display" : "none",
            "visibility" : "hidden"
        });
	}
});

$(".half-width-image").each(function () {
	var halfImage = $(this).attr("data-bgUrl");
    $(this).css("background-image", "url("+ halfImage +")");
});

$(".full-width-image").each(function () {
    var fullImage = $(this).data("bgUrl");
    $(this).css("background-image", "url("+ fullImage +")");
});

$("#date-btn").on("click", function () {
	$("#date-input").focus();
});

$("#checkbox-label").on("click", function () {
	$(this).parent().find("#input-checkbox").trigger("click");
});

$("#input-checkbox").on("change", function () {
    ($(this).prop("checked")) ? $(this).val("on") : $(this).val("off");
    ($(this).val() === "on") ? $("#submitBtn").prop("disabled", false) : $("#submitBtn").prop("disabled", true);
});

function bgColorSet() {

    $("section.breadcrumb, section.back, section.breadcrumb+section.product").css("background-color" , "rgb(255, 255, 255)");
    $("section:not(.visual, .breadcrumb, .back, section.breadcrumb+section.product, .filters, .flexible-panel-section, .locations, .share, .dealer ):even").css("background-color" , "rgb(255, 255, 255)");
    $("section:not(.visual, .breadcrumb, .back, section.breadcrumb+section.product, .filters, .flexible-panel-section, .locations, .share, .dealer):odd").css("background-color" , "rgb(245, 245, 245)");


    $("section").each(function () {
        if ($(this).hasClass("dealer")) {
            $(".dealer:not(.dealer-white, .dealer-auto)").css("background-color", "rgb(245, 245, 245)");
            $(".dealer.dealer-white").css("background-color", "rgb(255, 255, 255)");

            if( $(this).hasClass("dealer-auto") ) {
                if ( $(this).prev("section").hasClass("flexible-panel-section") ) {
                    var dealerPrevSecBg = $(this).prev("section").find(".panel:last-child").css("background-color");
                    if ( dealerPrevSecBg == "rgb(255, 255, 255)" ) {
                        $(this).css("background-color" , "rgb(245, 245, 245)");
                    }else {
                        $(this).css("background-color" , "rgb(255, 255, 255)");
                    }
                }
            }

            if( $(this).prev("section").hasClass("fabrics_container") ) {
                var prevFabrivBg = $(this).prev(".fabrics_container").find(".fabrics:last-child").css("background-color");
                if ( prevFabrivBg == "rgb(255, 255, 255)" ) {
                    $(this).css("background-color" , "rgb(245, 245, 245)");
                }else {
                    $(this).css("background-color" , "rgb(255, 255, 255)");
                }
            }
        }
        if ( $(this).hasClass("flexible-panel-section") ) {
            var prevSecBg = $(this).prev("section").css("background-color");
            if( $(this).prev("section").hasClass("breadcrumb") || $(this).prev("section").hasClass("back")) {
                $(this).find(".panel:first-child").css("padding-top","0");
                var prevSecBg = "rgb(245, 245, 245)";
            }
            if ( prevSecBg == "rgb(255, 255, 255)" ) {
                $(this).find(".panel:odd").css("background-color" , "rgb(255, 255, 255)");
                $(this).find(".panel:even").css("background-color" , "rgb(245, 245, 245)");
            }else {
                 $(this).find(".panel:even").css("background-color", "rgb(255, 255, 255)");
                 $(this).find(".panel:odd").css("background-color", "rgb(245, 245, 245)");
            }
        }

        if ( $(this).hasClass("product-carousel") ) {
            var productPrevSecBg = $(this).prev("section").css("background-color");

            if ( productPrevSecBg == "rgb(255, 255, 255)" ) {
                $(this).css("background-color" , "rgb(245, 245, 245)");
            }else {
                $(this).css("background-color" , "rgb(255, 255, 255)");
            }
            setInterval(100);
            var thisSecBg = $(this).css("background-color");
            if ( thisSecBg == "rgb(255, 255, 255)" ) {
                $(this).find(".item").css("border", "1px solid #dedede");
            }
        }

        if ( $(this).hasClass("list") || $(this).hasClass("product-category") ) {
            if ( $(this).prev("section").hasClass("flexible-panel-section") ) {
                var listPrevSecBg = $(this).prev("section").find(".panel:last-child").css("background-color");
            }else if ( $(this).prev("section").hasClass("list") ) {
                var listPrevSecBg = $(this).prev("section").css("background-color");
            }

            if ( listPrevSecBg == "rgb(255, 255, 255)" ) {
                $(this).css("background-color" , "rgb(245, 245, 245)");
            }else {
                $(this).css("background-color" , "rgb(255, 255, 255)");
            }
        }
        if ( $(this).hasClass("share") ) {
            var thisPrevSecBg = $(this).prev(".flexible-panel-section").find(".panel:last-child").css("background-color");
            $(this).css("background-color" , thisPrevSecBg);
        }

    },100);


    if($(".share")) {
        $(window).on("resize load", function () {
            if($(window).width() < 992) {
                $(".share").prev(".flexible-panel-section").find(".panel:last-child .container .row .col-12:last-child").css("padding-bottom", "0");
            }
        });
    }

    $(".fabrics").each(function () {
        if ( $(this).css("background-color") == "rgb(255, 255, 255)" ) {
        	$(this).find(".card").addClass("has-border");
        }
    });
    if ( $('.gallery').length > 0 ) {
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
    }
    bLazy.revalidate();
}
$(document).ready(function () {

    $(".toggle_text").on('click', function () {
        var textHideState = $(this).data('hide-state');
        var textShowState = $(this).data('show-state');
        $(this).closest('.hide_text').toggleClass('show-text');
        $(this).toggleClass('show-content');
        ($(this).hasClass('show-content') ? $(this).text(textShowState) : $(this).text(textHideState));
    });

    bgColorSet();
    setTimeout(function () {
        $(".dealer-filter, .filters").next(".actions").next(".flexible-panel-section").find(".panel").css("background-color" , "rgb(245, 245, 245)");
        $(".form").next(".form-message").next(".flexible-panel-section").find(".panel").css("background-color" , "rgb(245, 245, 245)");
    },100);

    $(".blog-search-btn").on("click touch", function () {
        var press = jQuery.Event("keypress");
        press.which = 13;
        $(this).prev('#blog_search_input_field').trigger(press);
    });

    $("a, button").bind("click", function () {
        showLoader();
        setTimeout(function () {
            hideLoader();
        },1500);
    });
});
$(window).on("load resize", function () {
        var maxHeight =0;
        setTimeout(function () {
            $(".product-category").find(".card").each(function (i,v) {
                if ($(this).find(".caption").outerHeight() > maxHeight) { maxHeight = $(this).find(".caption").outerHeight(); }
            });
            $(".product-category .card").find(".caption").css("height", maxHeight);

            $("#blog_search_container").find(".blogs-item:even").each(function (i,v) {
                firstElmHeight = $(this).find(".caption").outerHeight();
                nextElmHeight = $(this).next(".blogs-item").find(".caption").outerHeight();

                if (firstElmHeight >= nextElmHeight) {
                    $(this).next(".blogs-item").find(".caption").css("height", firstElmHeight);
                } else {
                    $(this).find(".caption").css("height", nextElmHeight);
                }
            });
        },100);

        $(".the-title").closest(".col-12.col-lg-12.pb-30").prev(".col-12.col-lg-6.pb-30").css("padding-bottom", "30px");
});


