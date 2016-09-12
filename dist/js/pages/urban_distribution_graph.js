
function urbanDistributionGraphs1($containerid,$graph) {

    if($graph == 'goLive') {
        $data = [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'Remaining Towns',
                y: 183,
                color: '#61C0E3'
            }, {
                name: 'IT Enabled Towns',
                y: 1222,
                color: '#B9C338'
            }]
        }];
    }else if($graph == 'complaint'){

        $data = [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'Chandrapur',
                y: 2,
                color: '#B5C334'
            }, {
                name: 'Palghar',
                y: 1,
                color: '#27727B'
            }, {
                name: 'Nandurbar',
                y: 3,
                color: '#60C0DD'
            }, {
                name: 'Jalgaon',
                y: 7,
                color: '#F3A43B'
            }, {
                name: 'Akola',
                y: 7,
                color: '#D7504B'
            }, {
                name: 'Washim',
                y: 9,
                color: '#DAB'
            }, {
                name: 'Amravati',
                y: 4,
                color: '#754'
            }, {
                name: 'Bhandara',
                y: 6,
                color: '#74B'
            }, {
                name: 'Yavatmal',
                y: 5,
                color: '#A2F'
            }, {
                name: 'Parbhani',
                y: 7,
                color: '#D3C'
            }]
        }];
    }else if($graph == 'connection'){
        $data = [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'greater than 45%',
                y: 2,
                color: '#B5C334'
            }, {
                name: '35%-45%',
                y: 1,
                color: '#27727B'
            }, {
                name: '25%-35%',
                y: 3,
                color: '#60C0DD'
            }, {
                name: '15%-25%',
                y: 7,
                color: '#F3A43B'
            }, {
                name: 'less than 15%',
                y: 47,
                color: '#D7504B'
            }]
    }];
    }
    $($containerid).highcharts({
        chart: {
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            margin: [0, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title:{
            text :''
        },
        exporting: {
            enabled: false
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '<b><br/> {point.y} MVW <br/> {point.total}</b>'
        },
        plotOptions: {
            pie: {
                size:'100%',
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 15,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                }
            }
        },
        credits : {
            enabled : false
        },
        series: $data
    });
}


function urbanDistributionGraphsPopup($containerid,$graph) {
    if($graph == 'goLive') {
        $data = [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'Remaining Towns',
                y: 183,
                color: '#61C0E3'
            }, {
                name: 'IT Enabled Towns',
                y: 1222,
                color: '#B9C338'
            }]
        }];
    }else{
        $data = [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'greater than 45%',
                y: 2,
                color: '#B5C334'
            }, {
                name: '35%-45%',
                y: 1,
                color: '#27727B'
            }, {
                name: '25%-35%',
                y: 3,
                color: '#60C0DD'
            }, {
                name: '15%-25%',
                y: 7,
                color: '#F3A43B'
            }, {
                name: 'less than 15%',
                y: 47,
                color: '#D7504B'
            }]
        }];
    }
    $($containerid).highcharts({
        chart: {
            animation: Highcharts.svg, // don't animate in old IE
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            plotBorderWidth: null,
            plotShadow: true,
            type: 'pie'
        },
        title:{
            text :''
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '<b><br/> {point.y} MVW <br/> {point.total}</b>'
        },
        plotOptions: {
            pie: {
                size:'100%',
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                cursor: 'pointer'
            }
        },
        credits : {
            enabled : false
        },
        series: $data
    });
}

function urbanDistributionGraphs2($containerId,$graph) {

    if($graph == 'complaint'){
        $max = 100;
        $title = '% of Towns';
        $color = ['#B9C039'];
        $data =[{

            name: ['Top 10 States'],
            data: [
                ['Gujarat', 100],
                ['Andhra Pradesh', 99],
                ['Himachal Pradesh', 90],
                ['Karnataka', 90],
                ['Kerala', 88],
                ['Madhya Pradesh', 88],
                ['Rajasthan', 88],
                ['Chhattisgarh', 87],
                ['Telengana', 82],
                ['Punjab', 66]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 20,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }else if($graph == 'connection'){
        $max = '';
        $title = '';
        $color = ['#B5C334','#27727B','#60C0DD','#F3A43B','#D7504B'];


        $data =[{

            name: [''],
            colorByPoint: true,
            data: [
                ['greater than 45%', 15],
                ['35%-45%', 12],
                ['25%-35%', 13],
                ['15%-25%', 20],
                ['less than 15%', 40]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 20,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }else{

        $color = ['#B9C039'];
        $title = '% of Towns';
        $data = [{

            name: ['Top 10 Towns'],
            data: [
                ['Bishnupur', 10],
                ['Islampur', 90],
                ['Jhargram', 9],
                ['Bongaon', 70],
                ['Durgapur', 80],
                ['Gangarampur', 45],
                ['Aurangadabad', 68],
                ['Gobardanga', 70],
                ['Dubrajpur',82],
                ['Katwa',36]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 5,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }


    $($containerId).highcharts({
        chart: {
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        exporting: {
            enabled: false
        },
        colors: $color,
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            labels: {
                enabled: false
            },
            min: 0,
            max:100,
            title: {
                text: $title
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y} (% of Towns )</b>'
        },

        credits : {
            enabled : false
        },
        series: $data
    });
}

function urbanDistributionGraphs4($containerId,$graph) {
    if($graph == 'complaint'){
        $title = '% of Towns';
        $color = ['#B9C039'];
        $data =[{
            name: ['Top 10 States where AT&C Loss Reduced'],
            data: [
                ['GJ', 100],
                ['AP', 99],
                ['HP', 90],
                ['KA', 90],
                ['KL', 88],
                ['MP', 88],
                ['RJ', 88],
                ['CG', 87],
                ['TE', 82],
                ['PB', 66]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 20,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }else if($graph == 'connection'){
        $max = '';
        $title = '';
        $color = ['#B5C334','#27727B','#60C0DD','#F3A43B','#D7504B'];
        $data =[{

            name: ['Percentage of Connection Released'],
            colorByPoint: true,
            data: [
                ['greater than 45%', 15],
                ['35%-45%', 12],
                ['25%-35%', 13],
                ['15%-25%', 20],
                ['less than 15%', 40]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 20,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }else{
        $title = '% of Towns';
        $color = ['#B9C039'];
        $data = [{
            name: ['Top 10 Towns'],
            data: [
                ['BP', 10],
                ['IP', 90],
                ['JG', 9],
                ['BG', 70],
                ['DP', 80],
                ['GP', 45],
                ['AB', 68],
                ['GD', 70],
                ['DBP',82],
                ['Kat',36]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 5,
                rotation: -90,
                x:0// 10 pixels down from the top
            }
        }];
    }


    $($containerId).highcharts({
        chart: {
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: $color,
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            labels: {
                enabled: true
            },
            min: 0,
            max:100,
            title: {
                text: $title
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: '<b>{point.y} (% of Towns )</b>'
        },

        credits : {
            enabled : false
        },
        series: $data
    });
}
