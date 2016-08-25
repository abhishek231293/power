
function createGraph1() {
    $("#graph1").highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#b9c338','#F5696B', '#448A99', '#256F33', '#F6A341'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Capacity (MW)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>Capacity: {point.y:.1f} (MW)</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Installed Capacity (MW)','Monitored Capacity (MW)','Capacity Under Maintenance (MW)','Permanent Shutdown Capacity (MW)','Unscheduled Capacity (Not Online) (MW)','Capacity Online (MW)'],
            data: [
                ['Installed', 2980.97],
                ['Monitored', 2595.62],
                ['Under Maintenance', 5293.93],
                ['Permanent Shutdown', 9791.40],
                ['Unscheduled (Not Online)', 1709.00],
                ['Online', 1902.73]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 0, // 10 pixels down from the top

            }
        }]
    });
}


function createGraph2() {
    $("#graph2").highcharts({
        chart: {
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title:{
            text :''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        tooltip: {
            pointFormat: '<b><br/> {point.y:.1f} MVW <br/> {point.percentage:.1f} %</br></b>'
        },
        plotOptions: {
            pie: {
                depth: 35,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:<br/> {point.y:.1f} ( {point.percentage:.1f} % )</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name:'',
            colorByPoint: true,
            data: [{
                name: 'PVT',
                y: 120002.63,
                color : '#F6A43F'
            }, {
                name: 'Central Sector',
                y: 76296.75,
                color : '#B8C338'
            }, {
                name: 'State',
                y: 101760.59,
                color : '#29717E'
            }]
        }]
    });
}


function createGraph3() {
    $("#graph3").highcharts({
        chart: {
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title:{
            text :''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        tooltip: {
            pointFormat: '<b><br/> {point.y:.1f} MVW <br/> {point.percentage:.1f} %</b>'
        },
        plotOptions: {
            pie: {
                depth: 35,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:<br/> {point.y:.1f} ( {point.percentage:.1f} % )</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name: '',
            colorByPoint: true,
            data: [{
                name: 'RES',
                y: 38821.51,
                color : '#FD8901'
            }, {
                name: 'Nuclear',
                y: 5780.00,
                color : '#FFD305'
            }, {
                name: 'Hydro',
                y: 42782.42,
                color : '#078CCB'
            }, {
                name: 'Thermal',
                y: 210675.04,
                color : '#53B435'
            }]
        }]
    });
}

function createGraph4() {
    $("#graph4").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        colors: ['#297180','#F5A441','#B9C23A'],
        xAxis: {
            categories: ['2011-12', '2012-13', '2013-14', '2014-15', '2015-16']
        },
        yAxis: {
            min: 0,
                title: {
                text: 'Installed Capacity (MW)'
            },
            stackLabels: {
                enabled: true,
                    style: {
                    fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '<b>{series.name}: {point.y}<br/>Total: {point.stackTotal}</b>'
        },
        credits : {
            enabled : false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                    dataLabels: {
                    enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Central Sector',
            data: [1254.23, 3125.25, 4452.25, 1517, 2152.25]
        }, {
            name: 'State Sector',
            data: [2651.23, 4152.25, 1233.23, 1122.3, 5481.23]
        }, {
            name: 'PVT Sector',
            data: [3458.5, 1254.23, 4512.12, 9562.32, 5455.25]
        }]
    });
}