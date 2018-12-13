$('#toggle').bind('click touch', function(event) {
    $(this).toggleClass('is-active');
    $('body').toggleClass('open');
    $('nav .menu').removeClass('submenu-open');
    $('nav .menu .submenu, nav .menu .megamenu').removeClass('open');
	checkBodyOverflow();

    event.stopPropagation();
});

$('nav .menu .submenu').bind('click touch', function() {
    $('nav .menu').toggleClass('submenu-open');
    $(this).toggleClass('open');
});

$('nav .menu .submenu > a').bind('click touch', function(event) {
    event.preventDefault();
});

$('nav .menu .submenu .back').bind('click touch', function(event) {
    event.stopPropagation();
    $('nav .menu .submenu').removeClass('open');
});

$('nav.navbar').find(".navbar-nav .nav-item .nav-link").each(function () {
    if ( $(this).hasClass("dropdown-toggle", "megamenu-toggle") ) {
        $(this).removeAttr("href");
    }
});

$(window).bind('click touchstart', function () {
	$('#toggle').removeClass('is-active');
    $('body').removeClass('open');
    $('nav .menu').removeClass('submenu-open');
    $('nav .menu .submenu').removeClass('open');
    $('nav .menu .megamenu').removeClass('open');
	checkBodyOverflow();
});

$('nav').bind('click touchstart', function(event) {
    event.stopPropagation();
});

// Mega Menu Functions

$('nav .menu .megamenu').bind('click touch', function(event) {
    event.stopPropagation();
    $('nav .menu').toggleClass('submenu-open');
    $(this).toggleClass('open');
});

$('nav.small-menu .menu .megamenu > a').bind('click touch', function(event) {
    event.preventDefault();
});

$('nav .menu .megamenu .back').bind('click touch', function(event) {
    event.stopPropagation();
    $('nav .menu .megamenu').removeClass('open');
    $(".megamenu-items .megamenu-item").removeClass('show');
});

$(".small-menu .megamenu-item .megamenu-item-title-arrow").bind('click touch', function (event) {
    event.stopPropagation();
    $(".megamenu-item").not( $(this).parent().parent()).removeClass("show");
    $(this).parent().parent().toggleClass('show');
});

var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if( $(window).width() > 991) {
        if (st > 40) {
            $('#main-menu').css({
                'position': 'fixed',
                'top': '0'
            }, 500);
            $('.large-usp').css({
                'position': 'fixed',
                'top': '85px'
            }, 500);
        }else {
            $('#main-menu').css({
                'position': 'relative',
                'top': ''
            }, 500);
            $('.large-usp').css({
                'position': 'relative',
                'top': ''
            }, 500);
        }
    }else {
        // if (st > lastScrollTop && st > 50) {
        //     $('nav.small-menu').css('top', '-86px');
        // } else {
        //     $('nav.small-menu').css('top', '0px');
        // }
        // lastScrollTop = st;
    }
});
