var myCenter = new google.maps.LatLng(20.5937,78.9629);

function loadGoogleMap() {
    $(".powerMap").hide();
    $("#map-container-v1").attr('style','height:530px');

        initializes();
}

function initializes()
{
    var mapProp = {
        center:myCenter,
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("map-container-v1"),mapProp);
}