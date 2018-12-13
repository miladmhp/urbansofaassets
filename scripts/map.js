$('#dealer-map-toggle').click(function() {
    $(this).toggleClass('active');
    $('#dealer-map').toggleClass('active');
    $('.locations').toggleClass('map-active');
    if ($(this).hasClass('active')) {
        $('.hide-map').fadeOut();
    } else {
        $('.hide-map').fadeIn();
    }
});

jQuery(function($) {
    if ($('#dealer-map').length > 0 || $('#map-area').length > 0) {
        // Asynchronously Load the map API
        var script = document.createElement('script');
        script.src = "//maps.googleapis.com/maps/api/js?callback=initializeDealerMap&key=AIzaSyBQLo-k04Kt3s4WjjtEQIT1b3HybPKbEAg";
        document.body.appendChild(script);
    }
});

function initializeDealerMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };


    // Display a map on the page

        if ($(window).width() >= 768 ) {
            map = new google.maps.Map(document.querySelector("#map-area"), mapOptions);
            map.setTilt(45);
        }else {
            map = new google.maps.Map(document.querySelector("#dealer-map"), mapOptions);
            map.setTilt(45);
        }






    // Multiple Markers
    var markers = [
        ['Regular Store', './assets/images/regular-map-pointer.png', 52.222850, 5.161018,-100],
        ['Premium Store', './assets/images/premium-map-pointer.png', 52.225531, 5.188999,0],
        ['XXL Store', './assets/images/xxl-map-pointer.png', 52.215468, 5.174215,-200]


    ];

    // Info Window Content
    var infoWindowContent = [
        [
			'<div class="info_content info-regular">' +
            	'<h3>Regular Store</h3>' +
            	'<img src="./assets/images/regular-circle.png" alt="">' +
            	'<p>Koningsweg 20, Soest</p>' +
				'<a href="./dealer.html">Informatie & openingstijden</a>' +
			'</div>'
        ],
		[
			'<div class="info_content info-premium">' +
            	'<h3>Premium Store</h3>' +
            	'<img src="./assets/images/premium-circle.png" alt="">' +
            	'<p>Koningsweg 20, Soest</p>' +
				'<a href="./dealer.html">Informatie & openingstijden</a>' +
			'</div>'
        ],
		[
			'<div class="info_content info-xxl">' +
            	'<h3>XXL Store</h3>' +
            	'<img src="./assets/images/xxl-circle.png" alt="">' +
            	'<p>Koningsweg 20, Soest</p>' +
				'<a href="./dealer.html">Informatie & openingstijden</a>' +
			'</div>'
        ]
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    // Loop through our array of markers & place each one on the map
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][2], markers[i][3]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
			icon: markers[i][1],
            zIndex:markers[i][4]+i
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
				infoWindow.setOptions({maxWidth: 200});
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

}

