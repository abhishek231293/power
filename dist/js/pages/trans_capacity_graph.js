function transCapacityGraph1() {
    $('#trans_capacity_graph1').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#b9c338','#F5696B'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Transmission Lines Added (ckm)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Demand: <b>{point.y:.1f} (MW)</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Transmission Line Growth'],
            data: [
                ['2013-14', 2980.97],
                ['2014-15', 2595.62],
                ['2015-16', 5293.93]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 0,
                x:-5// 10 pixels down from the top

            }
        }]
    });
}

function transCapacityGraph2() {
    $('#trans_capacity_graph2').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#b9c338','#F5696B'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Transformation Capacity Added (MVW)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Demand: <b>{point.y:.1f} (MW)</b>'
        },

        credits : {
            enabled : false
        },
        series: [{
            name: ['Transformation Capacity Growth'],
            data: [
                ['2013-14', 29805],
                ['2014-15', 25952],
                ['2015-16', 52931]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 0,
                x:-5// 10 pixels down from the top

            }
        }]
    });
}

function transCapacityGraph3() {
    $('#trans_capacity_graph3').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#b9c338','#F5696B','#B13C2E','#FF7F04'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 31-Mar-2016'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: 0
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Transformation Capacity (MVA)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Demand: <b>{point.y:.1f} (MW)</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Transformation Capacity'],
            data: [
                ['2011-12', 29805],
                ['2012-13', 25952],
                ['2013-14', 52931],
                ['2014-15', 29805],
                ['2015-16', 25952]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 0,
                x: 10 // 10 pixels down from the top

            }
        }]
    });
}


function transCapacityGraph4() {
    $("#trans_capacity_graph4").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        colors: ['#64BFE1','#B8C434'],
        xAxis: {
            categories: ['2011-12', '2012-13', '2013-14', '2014-15', '2015-16']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Transmission Lines Length (ckm)'
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
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        credits : {
            enabled : false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Length of Intra Regional Transmission Lines',
            data: [1254.23, 3125.25, 4452.25, 1517, 2152.25]
        }, {
            name: 'Length of Inter Regional Transmission Lines',
            data: [2651.23, 4152.25, 1233.23, 1122.3, 5481.23]
        }]
    });
}


function transCapacityGraph5() {
    $("#trans_capacity_graph5").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Apr-2015 - Mar-2016'
        },
        xAxis: {
            categories: [
                decodeURI('%C2%B1')+'800kV',
                '765kV',
                decodeURI('%C2%B1')+'500kV',
                '400kV',
                '220kV'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Length Added (ckm)'
            }
        },
        colors: ['#64BFE1','#B8C434'],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                    style: {
                        textShadow: '0 0 3px white'
                    }
                }
            }
        },
        series: [{
            name: 'Apr - 2014 - Mar - 2015',
            data: [49.9, 71.5, 106.4, 129.2, 144.0]

        }, {
            name: 'Apr - 2015 - Mar - 2016',
            data: [83.6, 78.8, 98.5, 93.4, 106.0]

        }]
    });
}


function transCapacityGraph6() {
    $("#trans_capacity_graph6").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Apr-2015 - Mar-2016'
        },
        xAxis: {
            categories: [
                decodeURI('%C2%B1')+'800kV',
                '765kV',
                decodeURI('%C2%B1')+'500kV',
                '400kV',
                '220kV'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Capacity Added (MVA)'
            }
        },
        colors: ['#64BFE1','#B8C434'],
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                    style: {
                        textShadow: '0 0 3px white'
                    }
                }
            }
        },
        series: [{
            name: 'Apr - 2014 - Mar - 2015',
            data: [49.9, 71.5, 106.4, 129.2, 144.0]

        }, {
            name: 'Apr - 2015 - Mar - 2016',
            data: [83.6, 78.8, 98.5, 93.4, 106.0]

        }]
    });
}

