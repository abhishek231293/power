var myCenter = new google.maps.LatLng(20.5937,78.9629);
var geocoder = new google.maps.Geocoder();

function loadMap() {
    $.getJSON("dist/json/IT_Town.json", function (data) {

        var items = [];
        var description = [];

        $.each(data.features, function (key, val) {
            $.each(val, function (index, detail) {

                if(index == 'geometry'){
                    $.each(detail, function (index1, detail1) {
                        if(index1 == 'coordinates'){
                            items.push(detail1[0] + ',' + detail1[1]);
                        }
                    });
                }
                if(index == 'properties'){
                    var desc = detail['Description'];
                    var descDetails = desc.split('<br>');
                    var statedata = descDetails[7].split(':');
                    var state = statedata[1].trim();
                  description.push(detail['Description']);

                }

            });
        });
        initializes(items,description);
    });
}

function initializes($locations,$description)
{

    var mapProp = {
        center:myCenter,
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker= {};
    var markers  = [];
    var icon = {
        url: "dist/img/marker/marker1.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    var bounds = new google.maps.LatLngBounds();
    $.each($locations, function( index, value ) {

        var location = value.split(',').map(Number);
        myLatLng = new google.maps.LatLng(location[1],location[0]);
        marker=new google.maps.Marker({
            position:myLatLng,
            icon: icon
        });

        marker.setMap(null);
        markers.push(marker);
        marker.setMap(map);

        var content = $description[index];
        var infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'mouseover', function(){
            if( prev_infowindow ) {
                prev_infowindow.close();
            }

            prev_infowindow = infowindow;
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){
            return function() {
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));
        bounds.extend(myLatLng);
    });
    var options = {
        imagePath: 'dist/img/marker/m'
    };

    var markerCluster = new MarkerClusterer(map, markers, options);
    //map.fitBounds(bounds);
}


