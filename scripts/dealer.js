
jQuery(function($) {

    if ($('#store-map').length > 0) {
        $(window).on("load resize", function () {
            if( $(window).width() < 992 ) {
                $('#store-map').height($(window).width());
            }
        });

        // Asynchronously Load the map API
        var script = document.createElement('script');
        script.src = "//maps.googleapis.com/maps/api/js?callback=initializeStoreMap&key=AIzaSyBQLo-k04Kt3s4WjjtEQIT1b3HybPKbEAg&language=nl";
        document.body.appendChild(script);
    }
});


function initializeStoreMap() {
    // The location of Uluru
    var storeLat = $("#store-map").data("lat");
    var storeLng = $("#store-map").data("lng");
    var storeMarker = $("#store-map").data("marker");
    var location = {
        lat: storeLat,
        lng: storeLng
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('store-map'), {
            zoom: 11,
            minZoom: 7,
            center: location,
            mapTypeControl:false
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: storeMarker
    });

}

$('#dealer-map-toggle').click(function () {
    $(this).toggleClass('active');
    $('#dealer-map').toggleClass('active');
    $('.locations').toggleClass('map-active');
    if ($(this).hasClass('active')) {
        $('.hide-map').fadeOut();
    } else {
        $('.hide-map').fadeIn();
    }
});

jQuery(function ($) {
    if ($('#dealer-map').length > 0 || $('#map-area').length > 0) {
        // Asynchronously Load the map API
        var script = document.createElement('script');
        script.src = "//maps.googleapis.com/maps/api/js?callback=initializeDealerMap&key=AIzaSyBQLo-k04Kt3s4WjjtEQIT1b3HybPKbEAg&language=nl&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.business%7Cvisibility:off&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text%7Cvisibility:off&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360";
        document.body.appendChild(script);
    }
});

$(document).ready(function () {
    $('#loadAllStores').on('click touch', function(e) {
        e.preventDefault();
        $("#found_stores .location").css('display', 'block');
        $(this).hide("slow");
    });
});