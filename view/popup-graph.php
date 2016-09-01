<div class="col-md-12" style="padding: 0px !important;border:none !important">
    <div class="panel panel-primary" style="margin: 0px !important;">
        <div class="panel-heading ng-binding" style="font-size: large">
            <i class="fa fa-line-chart"></i> <?php echo $_REQUEST['title']; ?>
        </div>
        <div class="panel-body">
            <div id="<?php echo $_REQUEST['container_id'];?>" >
                
            </div>
        </div>
    </div>
</div>

<script>
    <?php echo $_REQUEST['callback'].'(\'#'.$_REQUEST['container_id'].'\',"'.$_REQUEST['graph'].'")';?>
</script>