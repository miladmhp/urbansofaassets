
$('.keyword').click(function() {
    $(this).toggleClass('active');
});

if ($(".filters").length > 0 ) {
    $(window).on("load resize", function () {
        setTimeout(function () {
            $(".filters").find(".cats").find(".cat").each(function () {
                var catWidth = $(this).parent().outerWidth();
                $(this).find(".items").css("width", catWidth);
            });
        },500);
    });
    window.addEventListener("orientationchange", function() {
        setTimeout(function () {
            $(".filters").find(".cats").find(".cat").each(function () {
                var catWidth = $(this).parent().outerWidth();
                $(this).find(".items").css("width", catWidth);
            });
            var maxHeight =0;
            $(".product-category").find(".card").each(function (i,v) {
                if ($(this).find(".caption").outerHeight() > maxHeight) { maxHeight = $(this).find(".caption").outerHeight(); }
            });
            $(".product-category .card").find(".caption").css("height", maxHeight);
        },500);
    });
}




