
var myCenter = new google.maps.LatLng(20.5937,78.9629);
var map;

function loadMaps() {
    initMaps();
}


// Initialize the map and the custom overlay.

function initMaps() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 5,
        center: myCenter
    });
    // var ctaLayer = new google.maps.KmlLayer('https://raw.githubusercontent.com/abhishek231293/kmlFile/master/Power_Station.kml');
    var ctaLayer1 = new google.maps.KmlLayer('https://raw.githubusercontent.com/abhishek231293/kmlFile/master/IT_Town.kml');
    ctaLayer1.setMap(map);

    // var myParser = new geoXML3.parser({map: map});
    // myParser.parse('https://raw.githubusercontent.com/abhishek231293/kmlFile/master/IT_Town.kml');
    //
}







