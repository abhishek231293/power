var myCenter = new google.maps.LatLng(20.5937,78.9629);

function loadOverlayMap() {
    $(".powerMap").hide();
    $("#map-container-v1").attr('style','height:530px');
    $.getJSON("dist/json/Power_Station.json", function (data) {

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
                    $.each(detail, function (index1, detail1) {
                        if(index1 == 'Description'){
                            description.push(detail1);

                        }

                    });

                }

            });
        });

        initialize(items,description);
    });
}

function initialize($locations,$description)
{
    var mapProp = {
        center:myCenter,
        zoom:6,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("map-container-v1"),mapProp);
    var marker= {};
    var markers  = [];
    var icon = {
        url: "dist/img/marker/marker1.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };


    $.each($locations, function( index, value ) {

        var location = value.split(',').map(Number);

        marker=new google.maps.Marker({
            position:new google.maps.LatLng(location[1],location[0]),
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
    });
    var options = {
        imagePath: 'dist/img/marker/m'
    };

    var markerCluster = new MarkerClusterer(map, markers, options,true);
    var layers = [];

    layers [0] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/LineNER.kml",{
        preserveViewport: true,
        map: map
    });

    layers [1] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/LineER1.kmz",{
        preserveViewport: true,
        map: map
    });
    layers [2] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/lineER2.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [3] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/NR2.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [4] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/SR1.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [5] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/SR2.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [6] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/WR1.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [7] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/WR2.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [8] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/WR2 - Copy.kmz",{
        preserveViewport: true,
        map: map
    });

    layers [9] = new google.maps.KmlLayer("https://raw.githubusercontent.com/abhishek231293/kmlFile/master/NR1.kmz",{
        preserveViewport: true,
        map: map
    });
}