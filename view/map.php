<div class="row">
    <!-- Left col -->
    <div class="col-md-8">
        <!-- MAP & BOX PANE -->
        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Geographical Information of National Power</h3>
                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>

                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body no-padding">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                    </div>
                    <div class="col-md-9 col-sm-8">
                        <div class="tab-content no-padding">
                            <div class="pull-right">
                                <a style="position: relative; right:-20px;" data-toggle="tooltip" data-placement="left" title="View Large Map" class="powerMap cboxElement" href="#info-box">
                                    <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div id="map-container">

                                    <img src="./dist/img/gifImages/load.gif">

                                <?php //require_once 'powerMap.php'?>
                                <?php //require_once 'google_map.php'?>
                            </div>

                        </div>
                    </div>
                    <div id="map_info"></div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once 'map_with_graph_info_tabs.php'?>
</div>