// $("section:not(.visual):even").css("background-color" , "#fff");
// $("section:not(.visual):odd").css("background-color" , "#f5f5f5");
//
// $("section").each(function () {
// if ( $(this).hasClass("flexible-panel-section") ) {
//         var prevSecBg = $(this).prev("section").css("background-color");
//         if ( prevSecBg = "rgb(255, 255, 255)" ) {
//             $(this).find(".panel:even").css("background-color" , "#f5f5f5");
//             $(this).find(".panel:odd").css("background-color" , "#fff");
// 	}else {
//             $(this).find(".panel:even").css("background-color" , "#fff");
//             $(this).find(".panel:odd").css("background-color" , "#f5f5f5");
// 	}
// }
// });

("section:not(.flexible-panel-section, .visual), .flexible-panel-section .panel").each(function () {
    var prevSecBg = $(this).prev("section:not(.flexible-panel-section, .visual)").css("background-color");
    if ( prevSecBg = undefined ) {
        var prevSecBg = $(this).prev("section.flexible-panel-section").find(".panel:last-child").css("background-color");
    }
    if (prevSecBg === "rgb(255, 255, 255)") {
        $(this).css("background-color" , "#f5f5f5");
    }else{
        $(this).css("background-color" , "#fff");
    }
    setTimeout(100);
});
});