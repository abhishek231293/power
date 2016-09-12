<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = 'nppDemo_db';

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$mapDetail = $_REQUEST['map-detail'];

$stateId        = $mapDetail['stateId'];
$discomId       = $mapDetail['discomId'];
$townName       = $mapDetail['townName'];
$levelLocation  = $mapDetail['levelLocation'];

if($_REQUEST['section'] == 'state'){

    $sql = "SELECT 
                  state_discom_mapping_tbl.state_id,
                  state_discom_mapping_tbl.`discom_id`,
                  state_discom_mapping_tbl.`town_name`,
                  discom_tbl.`location` ,
                  state_discom_mapping_tbl.`discom_name` as 'title'
                FROM
                  `state_discom_mapping_tbl` 
                  LEFT JOIN `discom_tbl` 
                    ON `discom_tbl`.`discom_id` = `state_discom_mapping_tbl`.`discom_id` 
                WHERE state_discom_mapping_tbl.`state_id` = $stateId
                GROUP BY state_discom_mapping_tbl.`town_name`  ";
}else if(($_REQUEST['section'] == 'all-india')){

    $sql = "SELECT 
         state_discom_mapping_tbl.state_id,
         state_discom_mapping_tbl.`discom_id`,
         state_discom_mapping_tbl.`town_name`,
         state_tbl.`location`,
          state_tbl.`state_name` as 'title'
        FROM
         `state_tbl` 
         LEFT JOIN `state_discom_mapping_tbl` 
           ON `state_discom_mapping_tbl`.`state_id` = `state_tbl`.`state_id` 
        GROUP BY state_discom_mapping_tbl.`discom_id` ";

}else if(($_REQUEST['section'] == 'discom')){

    $sql = "SELECT 
              state_discom_mapping_tbl.state_id,
              state_discom_mapping_tbl.`discom_id`,
              state_discom_mapping_tbl.`town_name` as 'title',
              town_tbl.`location`,
              state_discom_mapping_tbl.description
            FROM
              `state_discom_mapping_tbl` 
              LEFT JOIN `discom_tbl` 
                ON `discom_tbl`.`discom_id` = `state_discom_mapping_tbl`.`discom_id` 
                LEFT JOIN `town_tbl`
                ON town_tbl.`town_name` = state_discom_mapping_tbl.`town_name`
            WHERE state_discom_mapping_tbl.`discom_id` = $discomId";

}
$result = $conn->query($sql);
$datatoReturn = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $datatoReturn[] = $row;
    }
} else {
    echo "0 results";
}

foreach($datatoReturn as &$value){


    $value['description'] = trim(preg_replace( "/\r|\n/", "<br/>", $value['description']));
    $value['description'] = explode('<br/>',$value['description']);
    $previous = $value['description'][5];
    $townss = explode(':',$value['description'][5]);
    $townss[1] = (trim(preg_replace('/[^A-Za-z0-9\-]/', '', $townss[1])) ? trim(preg_replace('/[^A-Za-z0-9\-]/', '', $townss[1])): ' NO ' );
    if($townss[1] == 'YES') {
        $value['description'][5] = $previous;
        $value['description'] = "Description<br/>" . $value['description'][1] . "<br/>" . $value['description'][2]
            . "<br/>" . $value['description'][3] . "<br/>" . $value['description'][4] . "<br/>" . $value['description'][5] . "<br/>" . $value['description'][6] . "<br/>" . $value['description'][7];
    }else{
        $value['description'] = "Description<br/>" . $value['description'][1] . "<br/>" . $value['description'][2]
            . "<br/>" . $value['description'][3] . "<br/>" . $value['description'][4] . "<br/> Go_Live_In:".$townss[1]." <br/>" . $value['description'][6] . "<br/>" . $value['description'][7];
    }
}
echo json_encode($datatoReturn);

$conn->close();

?>