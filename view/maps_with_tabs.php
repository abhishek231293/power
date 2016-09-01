<?php //echo $_REQUEST['section']; exit;?>
<?php if($_REQUEST['section'] == 'trans'){?>
<div class="box-body no-padding">
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <ul class="nav nav-tabs pull-left ui-sortable-handle">
                <li class="active" onclick="loadIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Transmission Lines</a></li>
                <li class="" onclick="loadOverlayMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Transmission Lines Status</a></li>
            </ul>
        </div>
        <div class="col-sm-12">
            <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

            </div>
        </div>
    </div>
</div>

<?php }else if($_REQUEST['section'] == 'install'){?>

    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <ul class="nav nav-tabs pull-left ui-sortable-handle">
                    <li class="active" onclick="loadInstallIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                    <li class="" onclick="loadGoogleMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

                </div>
            </div>
        </div>
    </div>

<?php }else if($_REQUEST['section'] == 'daily'){?>

    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <ul class="nav nav-tabs pull-left ui-sortable-handle">
                    <li class="active" onclick="loadDailyIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                    <li class="" onclick="loadGoogleMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

                </div>
            </div>
        </div>
    </div>

<?php }else if($_REQUEST['section'] == 'urban'){?>

    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <ul class="nav nav-tabs pull-left ui-sortable-handle">
                    <li class="active" onclick="loadDailyIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                    <li class="" onclick="loadMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

                </div>
            </div>
        </div>
    </div>

<?php }else if($_REQUEST['section'] == 'rural'){?>

    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <ul class="nav nav-tabs pull-left ui-sortable-handle">
                    <li class="active" onclick="loadRuralIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                    <li class="" onclick="loadGoogleMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

                </div>
            </div>
        </div>
    </div>

<?php }else if($_REQUEST['section'] == 'fund'){?>

    <div class="box-body no-padding">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <ul class="nav nav-tabs pull-left ui-sortable-handle">
                    <li class="active" onclick="loadFundIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                    <li class="" onclick="loadGoogleMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
                </ul>
            </div>
            <div class="col-sm-12">
                <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

                </div>
            </div>
        </div>
    </div>

<?php }else{ ?>
<div class="box-body no-padding">
    <div class="row">
        <div class="col-md-12 col-sm-12">
            <ul class="nav nav-tabs pull-left ui-sortable-handle">
                <li class="active" onclick="loadInitialIndiaMap()"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Overview</a></li>
                <li class="" onclick="loadGoogleMap()"><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Map</a></li>
            </ul>
        </div>
        <div class="col-sm-12">
            <div id="map-container-v1" style="height: 560px;" class="tab-content no-padding">

            </div>
        </div>
    </div>
</div>
<?php } ?>
