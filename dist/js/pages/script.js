$("#logo").mouseenter(function(){
    $("#animationImage").animate({
        height: 'toggle'
    });
});
$("#logo").mouseleave(function(){
    $("#animationImage").hide(100);
});

function showIntitalInfo(){

    changeInfoGraphs();

    $.ajax({
        type: "get",
        url: "view/powerMap_initial.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
    });

    $.ajax({
        type: "get",
        data:{'tab':'initial'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
    });

    $.ajax({
        type: "get",
        data: {info_for:'initial'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#map_info").html(result);
        $("#title1").html('Max Frequency');
        $("#title2").html('Max Demand');
        $("#title3").html('Shortage during max demand');
        $("#transmissionCapacity").hide();

        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','transmissionCapacity cboxElement');
        mapCounterEffect();
    });

}

function showInstallCapacityGraphs($graphSection){
    $.ajax({
        type: "get",
        url: "view/install_capacity_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);
        createGraph1();
        createGraph2();
        createGraph3();
        createGraph4();
    });

    $.ajax({
        type: "get",
        url: "view/powerMap.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
    });

    $.ajax({
        type: "get",
        data: {info_for:'install'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#transmissionCapacity").show();
        $("#map_info").html(result);
        $("#title1").html('Hydro');
        $("#title2").html('Thermal');
        $("#title3").html('Nuclear');
        $("#title4").html('RES');

        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','transmissionCapacity cboxElement');
        changeInfoGraphs();
        mapCounterEffect();
    });


}

function showDailyGenerationGraphs($graphSection){

    $.ajax({
        type: "get",
        url: "view/daily_generation_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);
        dailyGenerationGraph1();
        dailyGenerationGraph2();
        dailyGenerationGraph3();

    });

    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
    });

    $.ajax({
        type: "get",
        data: {info_for:'daily'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#transmissionCapacity").show();
        $("#map_info").html(result);
        $("#title1").html('Hydro');
        $("#title2").html('Thermal');
        $("#title3").html('Nuclear');
        $("#title4").html('RES');
        changeInfoGraphs();
        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','transmissionCapacity cboxElement');
        mapCounterEffect();
    });
}

function showTransCapacityGraphs() {
    $.ajax({
        type: "get",
        url: "view/trans_capacity_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);
        transCapacityGraph1();
        transCapacityGraph2();
        transCapacityGraph3();
        transCapacityGraph4();
        transCapacityGraph5();
        transCapacityGraph6();
        changeInfoGraphs('trans');
    });

    $.ajax({
        type: "get",
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
    });

    $.ajax({
        type: "get",
        data: {info_for:'transCapacity'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#map_info").html(result);
        $("#title1").html('Growth in T&D lines');
        $("#title2").html('Transmission Line Length (CKM)');
        $("#title3").html('Transformation Capacity (MVA)');
        $("#transmissionCapacity").hide();
        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','');
        mapCounterEffect();
    });
    
}

function loadIndiaMap(){
    $.ajax({
        type: "get",
        url: "view/svgMap.php"
    }).done(function( result ) {
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
    });
}


function showUrbanDistributionGraphs(){
    $.ajax({
        type: "get",
        url: "view/urban_distribution_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);

        urbanDistributionGraphs1();
        urbanDistributionGraphs2();
        urbanDistributionGraphs3();
        changeInfoGraphs('trans');
    });

    $.ajax({
        type: "get",
        url: "view/google_map.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadMap();
        $(".powerMap").hide();
    });

    $.ajax({
        type: "get",
        data: {info_for:'urban'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#map_info").html(result);
        $("#title1").html('AT&C loss');
        $("#title2").html('Bill Efficiency');
        $("#title3").html('Coll Efficiency');
        $("#title4").html('No Title');

        $("#installedCapacity").attr('class','baseLine cboxElement');
        $("#cumulativeGeneration").attr('class','connection cboxElement');
        $("#transportationCapacity").attr('class','complaints cboxElement');
        $("#transmissionCapacity").attr('class','');
        mapCounterEffect();
        switchMapInfoGraphs();
    });
}

function showRuralDistributionGraphs(){
    $.ajax({
        type: "get",
        url: "view/rural_distribution_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);

        ruralDistributionGraphs1();
        ruralDistributionGraphs2();
        ruralDistributionGraphs3();
        ruralDistributionGraphs4();

        changeInfoGraphs();
    });

    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        createSVGMap();
        $(".powerMap").show();
        mapCounterMapEffect();
    });

    $.ajax({
        type: "get",
        data: {info_for:'rural'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#map_info").html(result);
        $("#title1").html('Installed Capacity');
        $("#title2").html('Cumulative Generation');
        $("#title3").html('Growth in Transformation Capacity');
        $("#title4").html('Growth in Transmission Capacity');

        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','transmissionCapacity cboxElement');
        mapCounterEffect();
    });
}

function showFundingGraphs(){
    $.ajax({
        type: "get",
        url: "view/funding_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);
        fundingGraph1();
        fundingGraph2();

        changeInfoGraphs();

    });

    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        createSVGMap();
        $(".powerMap").show();
        mapCounterMapEffect();
    });

    $.ajax({
        type: "get",
        data: {info_for:'all'},
        url: "view/map_info.php"
    }).done(function( result ) {
        $("#map_info").html(result);
        $("#title1").html('Installed Capacity');
        $("#title2").html('Cumulative Generation');
        $("#title3").html('Growth in Transformation Capacity');
        $("#title4").html('Growth in Transmission Capacity');

        $("#installedCapacity").attr('class','installedCapacity cboxElement');
        $("#cumulativeGeneration").attr('class','cumulativeGeneration cboxElement');
        $("#transportationCapacity").attr('class','transportationCapacity cboxElement');
        $("#transmissionCapacity").attr('class','transmissionCapacity cboxElement');
        mapCounterEffect();
    });
}

function showIndiaMap(){
    $.ajax({
        type: "get",
        url: "view/india_map.php"
    }).done(function( result ) {
        $("#graph_content").html(result);

    });
}


$(document).ready(function () {
    $(".installedCapacity").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Installed Capacity",callback: "createInstalledCapacityInfoGraph"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".cumulativeGeneration").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Cumulative Generation",callback: "cumulativeGeneration"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".transportationCapacity").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"Growth in Transformation Capacity",callback: "transportationCapacity"},
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

});

function changeInfoGraphs($type){
    if($type == 'trans'){

        // createInstalledCapacityInfoGraph("#installed_capacity");
        // cumulativeGeneration("#cumulative_capacity");
        // transportationCapacity("#transportation_capacity");
        // noRecord("#transmission_capacity");
    }else{
        // createInstalledCapacityInfoGraph("#installed_capacity");
        // cumulativeGeneration("#cumulative_capacity");
        // transportationCapacity("#transportation_capacity");
        // transmissionCapacity("#transmission_capacity");
    }

}

function switchMapInfoGraphs(){
    $(".baseLine").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        // console.log('here');
        // $.ajax({
        //     type: "get",
        //     data: {container_id:'graph_loader',title:"AT&C loss reduced from baseline",callback: "baseLine"},
        //     url: "view/popup-graph.php"
        // }).done(function( result ) {
        //     $(".box-result").html(result);
        // });

        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"States where AT&C loss reduced from baseline",callback: "createInstalledCapacityInfoGraph"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".connection").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        // $.ajax({
        //     type: "get",
        //     data: {container_id:'graph_loader',title:"Connection Released in SERC",callback: "connection"},
        //     url: "view/popup-graph.php"
        // }).done(function( result ) {
        //     $(".box-result").html(result);
        // });
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"States where Connection Released in SERC",callback: "cumulativeGeneration"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".complaints").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        // $.ajax({
        //     type: "get",
        //     data: {container_id:'graph_loader',title:"Complaints Redressed in SERC",callback: "complaints"},
        //     url: "view/popup-graph.php"
        // }).done(function( result ) {
        //     $(".box-result").html(result);
        // });
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"States where Complaints Redressed in SERC",callback: "transportationCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});

    $(".interruption").colorbox({width: 680, height: 550, html:true,inline:true,onOpen: function ($var) {
        console.log($var);
        // $.ajax({
        //     type: "get",
        //     data: {container_id:'graph_loader',title:"No. of Interruptions",callback: "interruption"},
        //     url: "view/popup-graph.php"
        // }).done(function( result ) {
        //     $(".box-result").html(result);
        // });
        $.ajax({
            type: "get",
            data: {container_id:'graph_loader',title:"No. of Interruptions",callback: "transmissionCapacity"},
            url: "view/popup-graph.php"
        }).done(function( result ) {
            $(".box-result").html(result);
        });
    }});
}