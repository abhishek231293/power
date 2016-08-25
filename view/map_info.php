<div class="col-md-3 col-sm-4">
    <div class="pad box-pane-right bg-green" style="min-height: 395px">
        <?php if($_REQUEST['info_for'] == 'all'){?>

            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Hydro</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">1222</span>
                    /
                    <span style="font-size: 14px; font-weight: 900;" class="counter">1400</span>
                </div>
            </div>
            <hr />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 600;"  class="description-text">Thermal</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">11230</span>
                    /
                    <span style="font-size: 14px; font-weight: 900;" class="counter">18000</span>
                </div>
            </div>
            <hr/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Nuclear</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">12377</span>
                </div>
            </div>
            <hr  />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">RES</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">14969</span>
                </div>
            </div>

        <?}else if($_REQUEST['info_for'] == 'install'){?>
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Hydro</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">42848.43</span>
                </div>
            </div>
            <hr />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 600;"  class="description-text">Thermal</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">211640.4</span>
                </div>
            </div>
            <hr/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Nuclear</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">5780</span>
                </div>
            </div>
            <hr  />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">RES</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">42849.38</span>
                </div>
            </div>

        <?}else if($_REQUEST['info_for'] == 'daily'){?>
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Hydro</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">54970.78</span>
                </div>
            </div>
            <hr />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 600;"  class="description-text">Thermal</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">367135.41</span>
                </div>
            </div>
            <hr/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Nuclear</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">14150.71</span>
                </div>
            </div>
            <hr  />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">RES</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">42849.38</span>
                </div>
            </div>
        <?php }else if($_REQUEST['info_for'] == 'initial'){?>
            <div class="description-block margin-bottom">
                <span style="font-size: 16px; font-weight: 900;"  class="description-text">Max Frequency</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">50.2</span>
                </div>
            </div>
            <hr />
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 16px; font-weight: 900;"  class="description-text">Demand</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">120428</span>
                </div>
            </div>
            <hr/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 18px; font-weight: 900;"  class="description-text">Shortage</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">525</span>
                </div>
            </div>
            
        <?php }else if($_REQUEST['info_for'] == 'transCapacity'){?>
            <div class="description-block margin-bottom">
                <span style="font-size: 14px; font-weight: 900;"  class="description-text">Growth in T&D lines</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">1222</span>
                    /
                    <span style="font-size: 14px; font-weight: 900;" class="counter">1400</span>
                </div>
            </div>
            <hr  style="padding: 0px !important;"/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 14px; font-weight: 900;"  class="description-text">Transmission Line Length (CKM)</span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">341581</span>
                </div>
            </div>
            <hr  style="padding: 0px !important; margin: 0px !important;"/>
            <!-- /.description-block -->
            <div class="description-block margin-bottom">
                <span style="font-size: 14px; font-weight: 900;"  class="description-text">Plan wise growth of transmission lines<br/>
                    <span style="font-size: 12px;">
                        Below 66kv
                    </span>
                </span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 12px; font-weight: 900;" class="counter">658949</span>
                </div>
            </div>
            <hr  style="padding: 0px !important; margin: 0px !important;"/>
            <div class="description-block margin-bottom">
                <span style="font-size: 14px; font-weight: 900;"  class="description-text">Plan wise growth of transmission lines<br/>
                    <span style="font-size: 12px;">
                        66 kv and above
                    </span>
                    </span>
                <div class="sparkbar pad" data-color="#fff">
                    <span style="font-size: 14px; font-weight: 900;" class="counter">658949</span>
                </div>
            </div>

        <?php } else { ?>
            <?php if($_REQUEST['info_for'] == 'urban'){?>
                <div class="description-block margin-bottom">
                    <span style="font-size: 18px; font-weight: 900;"  class="description-text">IT ENABLED TOWNS</span>
                    <div class="sparkbar pad" data-color="#fff">
                        <span style="font-size: 14px; font-weight: 900;" class="counter">1222</span>
                        /
                        <span style="font-size: 14px; font-weight: 900;" class="counter">1400</span>
                    </div>
                </div>
                <hr />
                <div class="description-block margin-bottom">
                    <span style="font-size: 18px; font-weight: 900;"  class="description-text">Urban Feeders</span>
                    <div class="sparkbar pad" data-color="#fff">
                        <span style="font-size: 14px; font-weight: 900;" class="counter">12377</span>
                    </div>
                </div>
            <?php } ?>
            <?php if($_REQUEST['info_for'] == 'rural'){?>
                <div class="description-block margin-bottom">
                    <span style="font-size: 17px; font-weight: 600;"  class="description-text">Electrified Villages</span>
                    <div class="sparkbar pad" data-color="#fff">
                        <span style="font-size: 14px; font-weight: 900;" class="counter">11230</span>
                        /
                        <span style="font-size: 14px; font-weight: 900;" class="counter">18000</span>
                    </div>
                </div>
                <hr/>
                <div class="description-block margin-bottom">
                    <span style="font-size: 18px; font-weight: 900;"  class="description-text">Rural Feeders</span>
                    <div class="sparkbar pad" data-color="#fff">
                        <span style="font-size: 14px; font-weight: 900;" class="counter">14969</span>
                    </div>
                </div>
            <?php } ?>
        <?php } ?>
    </div>
</div>