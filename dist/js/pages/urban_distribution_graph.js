
function urbanDistributionGraphs1() {
    $("#urban_distribution_graph1").highcharts({
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
            pointFormat: '<b><br/> {point.y} MVW <br/> {point.total}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>:<br/> {point.y} / {point.total} ',
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
                name: 'Remaining Towns',
                y: 183,
                color : '#61C0E3'
            }, {
                name: 'IT Enabled Towns',
                y: 1222,
                color : '#B9C338'
            }]
        }]
    });
}

function urbanDistributionGraphs2() {
    $('#urban_distribution_graph2').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#B9C039'],
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
                text: '% of Towns'
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
        series: [{

            name: ['Top 10 States where AT&C Loss Reduced'],
            data: [
                ['Andhra Pradesh', 100],
                ['Chhattisgarh', 100],
                ['Gujrat', 100],
                ['Sikkim', 100],
                ['Tripura', 90],
                ['West Bengal', 80],
                ['Madhya Pradesh', 100],
                ['Telangana', 120],
                ['Uttarakhand', 190],
                ['Punjab', 70]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 0,
                x:-5// 10 pixels down from the top
            }
        }]
    });
}

function urbanDistributionGraphs3() {
    $('#urban_distribution_graph3').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#F5A53D'],
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
                text: 'Connection Released'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Connections : <b>{point.y}</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Top 10 States'],
            data: [
                ['Andhra Pradesh', 77],
                ['Telangana', 73],
                ['Gujrat', 53],
                ['Jammu & Kashmir', 100],
                ['Sikkim', 18],
                ['Kerala', 54],
                ['Chhattisgarh', 91],
                ['Uttaranchal', 85],
                ['Himachal Pradesh', 96],
                ['Tamil Nadu', 96]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 0,
                x:-15// 10 pixels down from the top

            }
        }]
    });
}

function createUrbanInstalledCapacityInfoGraph($containerId) {
    $($containerId).highcharts({
        chart: {
            backgroundColor: null,
            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#fff'],
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
            min: 0,
            title: {
                text: ''
            }

        },

        exporting: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Connections : <b>{point.y}</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Top 10 States'],
            data: [
                ['AP', 77],
                ['TL', 73],
                ['Gj', 53],
                ['J&K', 100],
                ['SK', 18],
                ['KL', 54],
                ['CG', 91],
                ['UTR', 85],
                ['HP', 96],
                ['TN', 96]
            ]
        }]
    });
}


