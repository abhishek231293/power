function showGraph() {

    $(".leftGraph1_urban").colorbox({
        width: 700, height: 570, html: true, inline: true, onOpen: function ($var) {
            $.ajax({
                type: "get",
                data: {container_id: 'graph_loader',graph:'goLive' ,title: "IT Enabled (Go-Live) Towns", callback: "urbanDistributionGraphsPopup"},
                url: "view/popup-graph.php"
            }).done(function (result) {
                $(".box-result").html(result);
            });
        }
    });

    $(".leftGraph2_urban").colorbox({
        width: 700, height: 570, html: true, inline: true, onOpen: function ($var) {
            console.log($var);
            $.ajax({
                type: "get",
                data: {container_id: 'graph_loader',graph:'complaint', title: "Consumer Complaints Redressed", callback: "urbanDistributionGraphs4"},
                url: "view/popup-graph.php"
            }).done(function (result) {
                $(".box-result").html(result);
            });
        }
    });

    $(".leftGraph3_urban").colorbox({
        width: 700, height: 570, html: true, inline: true, onOpen: function ($var) {
            console.log($var);
            $.ajax({
                type: "get",
                data: {container_id: 'graph_loader',graph:'connection', title: "Consumer Connection Released", callback: "urbanDistributionGraphsPopup"},
                url: "view/popup-graph.php"
            }).done(function (result) {
                $(".box-result").html(result);
            });
        }
    });

    $(".leftGraph4_urban").colorbox({
        width: 700, height: 570, html: true, inline: true, onOpen: function ($var) {
            console.log($var);
            $.ajax({
                type: "get",
                data: {container_id: 'graph_loader',graph:'interuption', title: "No of Interruption", callback: "urbanDistributionGraphs4"},
                url: "view/popup-graph.php"
            }).done(function (result) {
                $(".box-result").html(result);
            });
        }
    });

}

$(document).ready(function () {

    $(".leftGraph5").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Installed Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".leftGraph2").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Cumulative Generation",callback: "cumulativeGeneration"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".leftGraph3").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transformation Capacity",callback: "transportationCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".leftGraph4").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".leftGraph1").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".powerMap").colorbox({width: 1030, height: 820, html:true,inline:true,onOpen: function ($var) {
        $.ajax({
            type: "get",
            url: "view/india_map.php"
        }).done(function( result ) {
            console.log('her');
            $(".box-result").html(result);
            counterEffect();
        });
    }});

    $(".installedCapacity").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".cumulativeGeneration").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".transportationCapacity").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".transmissionCapacity").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".transmissionCapacity1").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transmission Capacity",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

});