<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NPP | Portal</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <style>
        @font-face {
            font-family: 'MyWebFont';
            src: url('digital-7__mono_italic_.eot'); /* IE9 Compat Modes */
            src: url('digital-7__mono_italic_.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('digital-7__mono_italic_.woff') format('woff'), /* Pretty Modern Browsers */
            url('digital-7__mono_italic_.ttf')  format('truetype'), /* Safari, Android, iOS */
            url('digital-7__mono_italic_.svg#svgFontName') format('svg'); /* Legacy iOS */
        }
    </style>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

    <link rel="stylesheet" href="dist/css/materialDesign.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">

    <link rel="stylesheet" href="dist/css/custom.css">


    <link rel="stylesheet" href="dist/css/colorbox.css">
    <link rel="stylesheet" href="dist/css/indiaMap.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="wrapper">
    <?php require_once 'view/header.php'?>

    <section class="content">
        <?php require_once 'view/info_tabs.php'; ?>
        <div  style="background: rgba(150, 190, 200, 0.3); color :#000; padding: 5px; position: absolute; z-index: 6; top: 160px; left: 300px;" id="map-levels">
            <span style="text-transform: capitalize;   display: none; font-weight: 300" id="india" data-india-title = '' data-india-map = "" data-location = "" href=""> All India / </span>

            <span style="text-transform: capitalize;   display: none;font-weight: 300" id="state" data-state-title = '' data-state-map = "" data-location = "" href="#">  </span>

            <a style="text-transform: capitalize;   display: none;font-weight: 300" id="discom" data-discom-title = '' data-discom-map = "" data-location = "" href=""> </a>

            <a style="text-transform: capitalize;   display: none; font-weight:300" id="town" data-town-title = '' data-town-map = "" data-location = "" href=""> Towns </a>
        </div>
        <?php require_once 'view/map.php'?>

        <div id="graph_content" style="margin-top: 1%;">

        </div>

    </section>

<?php

$tabs = array('Disclaimer'=>array('class'=>'fa fa-exclamation-triangle text-red','link'=>'#'),
    'Feedback'=>array('class'=>'fa fa-commenting text-white','link'=>'#'),
    'Glossary'=>array('class'=>'fa fa-book text-teal','link'=>'#'),
    'Contact'=>array('class'=>'fa fa-phone text-green','link'=>'#'),
    'Report'=>array('class'=>'fa fa-file-text-o text-aqua','link'=>'#'),
    'Importnat Links'=>array('class'=>'fa fa-external-link text-lime','link'=>'#'),
    'Ujala'=>array('class'=>'fa fa-bolt text-orange','link'=>'#'),
    'Vidyupt Pravah'=>array('class'=>'fa fa-circle-o text-red','link'=>'http://www.vidyutpravah.in/'),
    'GIS Map'=>array('class'=>'fa fa-map-marker text-red','link'=>'#googleMap')
);

?>

    <!--    <a href="#" class="scrollToTop">Graphs</a>-->
    <footer style="background: rgba(150, 150, 150, 0.1); margin-top: 1%; padding: 2%;">

            Copyright &copy; 2016-2017 NPP. All rights reserved.

        <a class="pull-right" href="#" >
            <img src="./dist/img/googleplayicon.png" style=" width: 100px; height: 36px; margin-top: -9%;">
        </a>

        <span class="pull-right" style="margin-right: 10%; padding-right: 2%; padding-left: 2%;">
            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-exclamation-triangle text-red"></i> <span>Disclaimer</span>
            </a>

            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-commenting text-black"></i> <span>Feedback</span>
            </a>

            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-book text-teal"></i> <span>Glossary</span>
            </a>

            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-phone text-green"></i> <span>Contact</span>
            </a>

            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-file-text-o text-aqua"></i> <span>Report</span>
            </a>

            <a style="margin-right: 20px;" href="#">
                <i class="fa fa-external-link text-lime"></i> <span>Importnat Links</span>
            </a>
        </span>
    </footer>


    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>

    <div id="boxloader" style="display: none">
        <div class="box-result" id="info-box">
        </div>
    </div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.js"></script>

<!-- Bootstrap 3.3.6 -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<!-- FastClick -->

<!-- Google map Api -->
<script src="https://maps.googleapis.com/maps/api/js?output=html&libraries=visualization,geometry,places&key=AIzaSyBoooBnGeg8ujDnwfpuco0T8ZvBig44pH0"></script>

<script src="dist/js/pages/geoxml3.js"></script>
<script src="dist/js/pages/ProjectedOverlay.js"></script>
<!-- HighCharts -->
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script type='text/javascript' >
    var CurrentTab = 'inital';
</script>
<script src="dist/js/pages/graph.js"></script>
<script src="dist/js/pages/popup.js"></script>
<script src="dist/js/pages/installed_capacity_graph.js"></script>
<script src="dist/js/pages/daily_capacity_graph.js"></script>
<script src="dist/js/pages/trans_capacity_graph.js"></script>
<script src="dist/js/pages/urban_distribution_graph.js"></script>
<script src="dist/js/pages/rural_distribution_graphs.js"></script>
<script src="dist/js/pages/urban_map_info_popup_graph.js"></script>
<script src="dist/js/pages/funding_graphs.js"></script>
<script src="dist/js/pages/splinegraphs.js"></script>

<script src="dist/js/jquery.colorbox.js"></script>
<script src="dist/js/app.min.js"></script>
<script src="dist/js/pages/map.js"></script>
<script src="dist/js/pages/map_v1.js"></script>
<script src="dist/js/pages/overlay_map.js"></script>
<script src="dist/js/pages/commonGoogleMap.js"></script>
<script src="dist/js/pages/map.js"></script>
<script src="dist/js/pages/cluster.js"></script>
<script src="dist/js/pages/counter.js"></script>
<script src="dist/js/popModal.js"></script>
<script src="dist/js/pages/script.js"></script>

<script type="text/javascript" src="dist/js/pages/ammap.js"></script>
<script type="text/javascript" src="dist/js/pages/indiaLow.js"></script>
<script src="dist/js/pages/svgMap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
<script>
    counterEffect();
    showIntitalInfo();
    $(document).ready(function(){
        $('.scrollToTop').fadeIn();

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){

            if ($(this).scrollTop() > 450) {
                $('.scrollToTop').fadeOut();
            } else {
                $('.scrollToTop').fadeIn();

            }
        });

        //Click event to scroll to top
//        $('.scrollToTop').click(function(){
//            $('html, body').animate({scrollTop : 0},400);
//            return false;
//        });

    });
</script>



</body>
</html>

