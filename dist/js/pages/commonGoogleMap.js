var Center = new google.maps.LatLng(20.5937,78.9629);

function loadGoogleMap() {
    $(".powerMap").hide();
    $("#map-container-v1").attr('style','height:530px');

    initializesGoogleMap();
}

function initializesGoogleMap()
{
    var mapProp = {
        center:Center,
        zoom:6,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("map-container-v1"),mapProp);
}