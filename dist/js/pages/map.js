var geocoder = new google.maps.Geocoder();
stateDetail = [];
var myLevel = {};
var mapLayer = 'all-india';
var curentlevelDetail = {};

function loadFullMap($level,$Mapdetail) {

    if($level == 'all-india'){
        $("#india").data('indiaMap',false);
        $("#state").data('stateMap', 0);
        addLevel('india','All India / ');

    }else if($level == 'state'){
        $("#state").data('stateMap',$Mapdetail.stateId);
        $("#state").data('location',$Mapdetail.levelLocation);
        addLevel('state','State / ');
    }else if($level == 'discom'){
        $("#discom").data('location',$Mapdetail.levelLocation);
        $("#discom").data('discomMap',$Mapdetail.discomId);
        addLevel('discom','Discom / ');
    }

    mapLayer = $level;
    if($level == 'all-india') {

        var myCenter = new google.maps.LatLng(20.5937,78.9629);
        var zoomlevel = 4;
    }else if($level == 'town') {

        var centerLocation =  $Mapdetail.levelLocation.split(',');
        var myCenter = new google.maps.LatLng(centerLocation[0],centerLocation[1]);
        var zoomlevel = 5;
    }else{

        var centerLocation =  $Mapdetail.levelLocation.split(',');
        var myCenter = new google.maps.LatLng(centerLocation[0],centerLocation[1]);
        var zoomlevel = 5;
    }
    if($level == 'discom') {

        $.ajax({
            type: "get",
            data: {'section': $level,'map-detail':$Mapdetail},
            url: "connection.php"
        }).done(function (result) {
            var items = [];
            var description = [];
            result = JSON.parse(result);

            $.each(result, function (index1, detail1) {
                items.push(detail1.location);
                description.push(detail1.description);
            });

            initializesTown(items, description,myCenter,zoomlevel);
        });
    }else {
        $.ajax({
            type: "get",
            data: {'section': $level,'map-detail':$Mapdetail},
            url: "connection.php"
        }).done(function (result) {
            var items = [];
            var description = [];
            result = JSON.parse(result);

            $.each(result, function (index1, detail1) {
                items.push(detail1.location);
                description.push(detail1);
            });
            initializes(items, description,myCenter,zoomlevel);
        });
    }
}

function initializes($locations,$description,$mapCenter,$zoomlevel)
{
    var mapProp = {
        center:$mapCenter,
        zoom:$zoomlevel,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("map-container-v1"),mapProp);
    var marker = {};
    var marker1= {};
    var marker2= {};

    var markers  = [];
    var markers1  = [];
    var markers2  = [];

    var icon = {
        url: "marker1.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    $.each($locations, function(index,value) {

        var location = value.split(',').map(Number);
        myLatLng = new google.maps.LatLng(location[0],location[1]);

        marker = new google.maps.Marker({
            position:myLatLng,
            icon: icon,
            state_id:  $description[index].state_id,
            discom_id: $description[index].discom_id,
            town_name: $description[index].town_name,
            location:  $description[index].location,
            title:  $description[index].title
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
            infowindow.open(map);
        });

        google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){
            return function() {
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));
        // bounds.extend(myLatLng);

    });

    var options = {
        imagePath: 'dist/img/marker/m',
        zoomOnClick: true,
        gridSize: 20
    };

    var markerCluster  = new MarkerClusterer(map, markers, options,false);

    google.maps.event.addListener(map, 'click', function (event) {
        if (!clusterClicked && (mapLayer != 'feeders' || mapLayer != 'town')) {
            loadFullMap(mapLayer,curentlevelDetail);

            if(mapLayer == 'discom') {
                $title = curentlevelDetail.title.toLowerCase();
                $("#discom").html($title +' / ');
                $("#discom").data('discomTitle',$title);
                changeInfoGraphs('urban', mapLayer);
            }
            if(mapLayer == 'state'){
                $title = curentlevelDetail.title.toLowerCase();
                $("#state").data('stateTitle',$title);
                $("#state").html($title +' / ' );
            }

        }
        else {
            clusterClicked = false;
        }
    });


    google.maps.event.addListener(markerCluster, "clusterclick", function (cluster) {

        var currentMarkers = cluster.getMarkers();

        curentlevelDetail.stateId = currentMarkers[0].state_id;
        curentlevelDetail.discomId = currentMarkers[0].discom_id;
        curentlevelDetail.townName = currentMarkers[0].town_name;
        curentlevelDetail.levelLocation = currentMarkers[0].location;
        curentlevelDetail.title = currentMarkers[0].title;

        if(mapLayer == 'all-india'){
            mapLayer = 'state';
        }else if(mapLayer == 'state'){
            mapLayer = 'discom';
        }else if(mapLayer == 'discom'){
            mapLayer = 'town';
        }
        clusterClicked = false;
    });

}

function initializesTown($locations,$description,$mapCenter,$zoomlevel)
{
    var mapProp = {
        center:$mapCenter,
        zoom:$zoomlevel,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
    };
    var prev_infowindow =false;
    var map = new google.maps.Map(document.getElementById("map-container-v1"),mapProp);
    var marker = {};
    var marker1= {};
    var marker2= {};
    var markers  = [];
    var markers1  = [];
    var markers2  = [];

    var icon = {
        url: "marker1.png", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    $.each($locations, function(index,value) {

        var location = value.split(',').map(Number);
        myLatLng = new google.maps.LatLng(location[0],location[1]);

        marker = new google.maps.Marker({
            position:myLatLng,
            icon: icon,
            state_id:  $description[index].state_id,
            discom_id: $description[index].discom_id,
            town_name: $description[index].town_name,
            location:  $description[index].location,
            title:  $description[index].title
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
            infowindow.open(map);
        });

        google.maps.event.addListener(marker, 'click', function(data){


            $("#town").data('townMap','town');
            addLevel('town','Town');

            changeInfoGraphs('urban', mapLayer);
            showFeeders();
        });

        google.maps.event.addListener(marker,'mouseover', (function(marker,content,infowindow){
            return function() {
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));

    });

    var options = {
        imagePath: 'dist/img/marker/m',
        zoomOnClick: true,
        gridSize: 20
    };

    if(mapLayer == 'all-india'){
        mapLayer = 'state';
    }else if(mapLayer == 'state'){
        mapLayer = 'discom';
    }else if(mapLayer == 'discom'){
        mapLayer = 'town';
    }else if(mapLayer == 'town'){
        mapLayer = 'feeders';
    }

}

function addLevel($id,$value){
    $("#"+$id).html($value);
    $("#"+$id).show();
}

function removeLevel($id){
    $("#"+$id).hide();
}

$("#india").click(function(e){
    $("#graph_content").html('');
    $("#state").data('stateMap','');
    $("#discom").data('discomMap','');
    $("#town").data('townMap','');
    removeLevel('state');
    removeLevel('discom');
    removeLevel('town');
    event.preventDefault();
    loadFullMap('all-india',false);
    changeInfoGraphs('urban', false);
});

$("#state").click(function(e){

    console.log('hes');
    $("#graph_content").html('');

    $("#discom").data('discomMap','');
    $("#town").data('townMap','');
    removeLevel('discom');
    removeLevel('town');
    e.preventDefault();
    $("#state").html($(this).data('stateTitle'));
    $data = {stateId : $(this).data('stateMap'),levelLocation: $(this).data('location')};
    loadFullMap('state',$data);
    changeInfoGraphs('urban', false);

});


$("#discom").click(function(e){

    $("#graph_content").html('');
    $that = $(this);
    $("#discom").html($that.data('discomTitle'));
    $("#town").data('townMap','');
    removeLevel('town');
    event.preventDefault();
    $data = {stateId : $that.data('discomMap'),levelLocation: $that.data('location')};
    loadFullMap('discom',$data);
    changeInfoGraphs('urban', mapLayer);
});

$("#town").click(function(e){
    changeInfoGraphs('urban', 'town');
    event.preventDefault();

});

function showFeeders(){
    $.ajax({
        type: "get",
        url: "view/feedersList.php"
    }).done(function( result ) {
        $("#graph_content").html(result);
        createFeedersCompareGraph();
        window.location="http://localhost/RevisedVersion_125478956484161_NaTiOnAl_poWer_PORtaLV1.24587458/#graph_content";

    });

}