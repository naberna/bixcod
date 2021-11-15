function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 41.03143688585219, lng: 29.23196133649036};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'BIXCPD' // Title Location
    });
}