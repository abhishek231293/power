function dailyGenerationGraph1() {
    $('#daily_generation_graph1').highcharts({
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
                text: 'Demand (MW)'
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

            name: ['Peak Requirement (MW)','Peak Demand (MW)','Defict/Surplus (MW)'],
            data: [
                ['Peak Requirement', 2980.97],
                ['Peak Demand', 2595.62],
                ['Defict/Surplus', 5293.93]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 0,
                x:-25

            }
        }]
    });
}


function dailyGenerationGraph2() {
    $("#daily_generation_graph2").highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Till Mar-2016'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '% PLF'
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name: '2014-15',
            marker: {
                symbol: 'square'
            },
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]

        }, {
            name: '2015-16',
            marker: {
                symbol: 'diamond'
            },
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
}

function dailyGenerationGraph3() {

    // Build the chart
    $('#daily_generation_graph3').highcharts({
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
            pointFormat: '{series.name}: <b>{point.y:.1f} (MU)</b>'
        },
        plotOptions: {
            pie: {
                depth: 35,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>:<br/> {point.y:.1f}',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                showInLegend: true
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            name: 'Total',
            colorByPoint: true,
            data: [{
                name: 'Target',
                y: 3119.04,
                color : '#64BFE1'
            }, {
                name: 'Actual',
                y: 3407.14,
                color : '#b9c338'
            }, {
                name: 'Deviations',
                y: 900.24,
                color : '#F5696B'
            }]
        }]
    });
}