$(function () {
    $('#all_india_capacity_graph').highcharts({
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
            pointFormat: 'Capacity: <b>{point.y:.1f} (MW)</b>'
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
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: -10, // 10 pixels down from the top

            }
        }]
    });
});


$(function () {

        // Build the chart
        $('#daily_demand_graph').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title:{
                text :''
            },
            subtitle: {
                text: 'On 27-Apr-2016'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y:.1f} (MW)</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
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
                    name: 'Peak Requirement',
                    y: 60,
                    color : '#64BFE1'
                }, {
                    name: 'Peal Demand Met',
                    y: 25,
                    color : '#b9c338'
                }, {
                    name: 'Deficit/Surplus',
                    y: 15,
                    color : '#F5696B'
                }]
            }]
        });
});


$(function () {

    // Build the chart
    $('#daily_generation_graph').highcharts({
        chart: {
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
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
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
});

$(function () {
    $('#all_india_monthly_plf_graph').highcharts({
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
});

$(function () {
    $('#coal_stock_criticality_position').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#b9c338','#F5696B', '#448A99'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 27-Apr-2016'
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
                text: 'No. of Stations'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'No. of Stations : <b>{point.y:.1f}</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Pithead Critical (<5 Days)','Pithead Super Critical (<3 Days)','Non-Pithead Critical (<7 Days)','Non-Pithead Super Critical (<4 Days)'],
            data: [
                ['Pithead Critical', 20],
                ['Pithead Super Critical', 25],
                ['Non-Pithead Critical', 14],
                ['Non-Pithead Super Critical', 9]
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
});

$(function () {
    $('#coal_stock_available').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'On 27-Apr-2016'
        },
        colors: ['#2A7080','#B8C438'],
        xAxis: {
            categories: [
                '0-5',
                '5-15',
                '15-25',
                '>=25'
            ],
            title: {
                text: 'Range of Days'
            },
            crosshair: true
        },
        credits : {
            enabled : false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of Stations'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
                    crop: false,
                    overflow: 'none'
                }
            }
        },
        series: [{
            name: 'No. of Station (Pithead)',
            data: [49.9, 71.5, 106.4, 129.2]

        }, {
            name: 'No. of Station (Non-Pithead)',
            data: [83.6, 78.8, 98.5, 93.4]

        }]
    });
});

function createGraph($container) {
    $($container).highcharts({
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
            pointFormat: 'Capacity: <b>{point.y:.1f} (MW)</b>'
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
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: -10, // 10 pixels down from the top

            }
        }]
    });
}
