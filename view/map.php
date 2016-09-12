<div class="row">
    <!-- Left col -->
    <?php require_once 'map_with_graph_info_tabs.php'?>
    <div class="col-md-12">
        <!-- MAP & BOX PANE -->
        <div>
            <!-- /.box-header -->
            <div class="box-body no-padding">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <div class="tab-content no-padding">
<!--                            <div class="pull-right">-->
<!--                                <a style="position: relative; right:10px; z-index: 99;" data-toggle="tooltip" data-placement="left" title="View Large Map" class="powerMap cboxElement" href="#info-box">-->
<!--                                    <i class="fa fa-arrows-alt" aria-hidden="true"></i>-->
<!--                                </a>-->
<!--                            </div>-->
                            <div id="map-container" style="height: 780px;">

                                    <img style="width:100%; height: 100%;" src="./dist/img/gifImages/load.gif">

                                <?php //require_once 'powerMap.php'?>
                                <?php //require_once 'google_map.php'?>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <?php require_once 'map_with_graph_info_rigth_tabs.php'?>
</div>