$("#logo").mouseenter(function(){
    $("#animationImage").animate({
        height: 'toggle'
    });
});
$("#logo").mouseleave(function(){
    $("#animationImage").hide(100);
});

function showIntitalInfo(){
    $("#map_title").html('Geographical Information of National Power');
    changeInfoGraphs();

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $.ajax({
        type: "get",
        data:{'section':'initial'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadInitialIndiaMap();
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

        mapCounterEffect();
    });

}

function showInstallCapacityGraphs($graphSection){

    $("#installTabs").attr('class','glow ibox float-e-margins');
    $("#dailyTabs").attr('class','glowOut ibox float-e-margins');
    $("#transTabs").attr('class','glowOut ibox float-e-margins');
    $("#urbanTabs").attr('class','glowOut ibox float-e-margins');
    $("#ruralTabs").attr('class','glowOut ibox float-e-margins');
    $("#fundTabs").attr('class','glowOut ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $("#map_title").html('Installed Capacity');
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
        data:{'section':'install'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadInstallIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
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

        changeInfoGraphs();
        mapCounterEffect();
    });


}

function showDailyGenerationGraphs($graphSection){

    $("#installTabs").attr('class','glowOut ibox float-e-margins');
    $("#dailyTabs").attr('class','glow ibox float-e-margins');
    $("#transTabs").attr('class','glowOut ibox float-e-margins');
    $("#urbanTabs").attr('class','glowOut ibox float-e-margins');
    $("#ruralTabs").attr('class','glowOut ibox float-e-margins');
    $("#fundTabs").attr('class','glowOut ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $("#map_title").html('Daily Generation');
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
        data:{'section':'daily'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadDailyIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
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

        mapCounterEffect();
    });
}

function showTransCapacityGraphs() {

    $("#installTabs").attr('class','glowOut ibox float-e-margins');
    $("#dailyTabs").attr('class','glowOut ibox float-e-margins');
    $("#transTabs").attr('class','glow ibox float-e-margins');
    $("#urbanTabs").attr('class','glowOut ibox float-e-margins');
    $("#ruralTabs").attr('class','glowOut ibox float-e-margins');
    $("#fundTabs").attr('class','glowOut ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $("#map_title").html('Transmission/Transformation Capacity');

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
        data:{'section':'trans'},
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

        $("#transmissionCapacity").attr('class','');
        mapCounterEffect();
    });

}

function showUrbanDistributionGraphs(){



    $("#installTabs").attr('class','glowOut ibox float-e-margins');
    $("#dailyTabs").attr('class','glowOut ibox float-e-margins');
    $("#transTabs").attr('class','glowOut ibox float-e-margins');
    $("#urbanTabs").attr('class','glow ibox float-e-margins');
    $("#ruralTabs").attr('class','glowOut ibox float-e-margins');
    $("#fundTabs").attr('class','glowOut ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1_urban cboxElement');
    $("#leftGraph2").attr('class','leftGraph2_urban cboxElement');
    $("#leftGraph3").attr('class','leftGraph3_urban cboxElement');
    $("#leftGraph4").attr('class','leftGraph4_urban cboxElement');
    $("#leftGraph5").attr('class','leftGraph5_urban cboxElement');

    $("#map_title").html('Urban Distribution');

    $.ajax({
        type: "get",
        url: "view/urban_distribution_graphs.php"
    }).done(function( result ) {
        $("#graph_content").html(result);

        // urbanDistributionGraphs1('#urban_distribution_graph1');
        // urbanDistributionGraphs2('#urbanDistributionGraphs2');
        // urbanDistributionGraphs3();
        changeInfoGraphs('urban');
    });

    $.ajax({
        type: "get",
        data:{'section':'urban'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadDailyIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
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
        $("#title4").html('RES');

        $("#leftHead1").html('IT Enabled (go-live) towns');
        $("#leftHead2").html('Consumer Complaints Redressed');
        $("#leftHead3").html('Consumer Connection Released');
        $("#leftHead4").html('No Of Interruption');

        mapCounterEffect();
        switchMapInfoGraphs();
        showGraph();
    });
}

function showRuralDistributionGraphs(){

    $("#installTabs").attr('class','glowOut ibox float-e-margins');
    $("#dailyTabs").attr('class','glowOut ibox float-e-margins');
    $("#transTabs").attr('class','glowOut ibox float-e-margins');
    $("#urbanTabs").attr('class','glowOut ibox float-e-margins');
    $("#ruralTabs").attr('class','glow ibox float-e-margins');
    $("#fundTabs").attr('class','glowOut ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $("#map_title").html('Rural Distribution');
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
        data:{'section':'rural'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadRuralIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
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

        mapCounterEffect();
    });
}

function showFundingGraphs(){

    $("#installTabs").attr('class','glowOut ibox float-e-margins');
    $("#dailyTabs").attr('class','glowOut ibox float-e-margins');
    $("#transTabs").attr('class','glowOut ibox float-e-margins');
    $("#urbanTabs").attr('class','glowOut ibox float-e-margins');
    $("#ruralTabs").attr('class','glowOut ibox float-e-margins');
    $("#fundTabs").attr('class','glow ibox float-e-margins');

    $("#leftGraph1").attr('class','leftGraph1 cboxElement');
    $("#leftGraph2").attr('class','leftGraph2 cboxElement');
    $("#leftGraph3").attr('class','leftGraph3 cboxElement');
    $("#leftGraph4").attr('class','leftGraph4 cboxElement');
    $("#leftGraph5").attr('class','leftGraph5 cboxElement');

    $("#map_title").html('Funding Under IPDS/DDUGIY');
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
        data:{'section':'fund'},
        url: "view/maps_with_tabs.php"
    }).done(function( result ) {
        $("#map-container").html(result);
        loadFundIndiaMap();
        $("#map-container-v1").attr('style','height:450px');
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

function loadInitialIndiaMap(){

    $.ajax({
        type: "get",
        url: "view/powerMap_initial.php"
    }).done(function( result ) {
        console.log(result);
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
    });
}

function loadInstallIndiaMap(){

    $.ajax({
        type: "get",
        url: "view/powerMap.php"
    }).done(function( result ) {
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
    });

}

function loadDailyIndiaMap(){
    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
    });
}

function loadRuralIndiaMap(){
    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
    });
}

function loadFundIndiaMap(){
    $.ajax({
        type: "get",
        url: "view/powerMap_v1.php"
    }).done(function( result ) {
        $("#map-container-v1").html(result);
        $(".powerMap").show();
        mapCounterMapEffect();
        $("#map-container-v1").attr('style','');
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




function changeInfoGraphs($type){
    if($type == 'trans'){
        document.getElementById('leftTitle1').style.height = "83px";
        document.getElementById('leftTitle2').style.height = "83px";
        document.getElementById('leftTitle3').style.height = "83px";
        document.getElementById('leftTitle4').style.height = "83px";
        $("#transmissionCapacityss").show();
        createInstalledCapacityInfoGraph("#installed_capacity");
        cumulativeGeneration("#cumulative_capacity");
        transportationCapacity("#transportation_capacity");
        transmissionCapacity("#transmission_capacity");
        transmissionCapacity("#rightTitle5");
        createBarChart("#leftTitle1");
        createBarChart("#leftTitle2");
        createBarChart("#leftTitle3");
        createBarChart("#leftTitle4");
        createBarChart("#leftTitle5");

    }else if($type == 'urban'){

        document.getElementById('leftTitle1').style.height = "120px";
        document.getElementById('leftTitle2').style.height = "120px";
        document.getElementById('leftTitle3').style.height = "120px";
        document.getElementById('leftTitle4').style.height = "120px";
        // Right Side
        createInstalledCapacityInfoGraph("#installed_capacity");
        cumulativeGeneration("#cumulative_capacity");
        transportationCapacity("#transportation_capacity");
        transmissionCapacity("#transmission_capacity");
        transmissionCapacity("#rightTitle5");

        urbanDistributionGraphs1('#leftTitle1','goLive');
        urbanDistributionGraphs2('#leftTitle2','complaint');
        urbanDistributionGraphs1('#leftTitle3','connection');
        urbanDistributionGraphs2('#leftTitle4','interuption');

        $("#transmissionCapacityss").hide();

    }else{
        document.getElementById('leftTitle1').style.height = "83px";
        document.getElementById('leftTitle2').style.height = "83px";
        document.getElementById('leftTitle3').style.height = "83px";
        document.getElementById('leftTitle4').style.height = "83px";
        $("#transmissionCapacityss").show();
        createInstalledCapacityInfoGraph("#installed_capacity");
        cumulativeGeneration("#cumulative_capacity");
        transportationCapacity("#transportation_capacity");
        transmissionCapacity("#transmission_capacity");
        transmissionCapacity("#rightTitle5");
        transmissionCapacity("#leftTitle1");
        transmissionCapacity("#leftTitle2");
        transmissionCapacity("#leftTitle3");
        transmissionCapacity("#leftTitle4");
        transmissionCapacity("#leftTitle5");
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