function ruralDistributionGraphs1() {
    $('#rural_distribution_graph1').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039','#B9C039'
            ,'#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F','#F6A43F'
            ,'#D95050','#D95050','#D95050','#D95050'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'Mar-2016'
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
                text: 'Power Supply (in Hrs.)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>Average Power Supply : </b>{point.y} hrs'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['Average Power Supply'],
            data: [
                ['GJ', 23.64],
                ['HP', 23.19],
                ['AP', 23.18],
                ['KL', 23.14],
                ['PB', 22.99],
                ['TR', 22.75],
                ['CT', 22.60],
                ['WB', 22.39],
                ['TG', 22.31],
                ['TN', 22.04],
                ['MH', 21.95],
                ['UT', 21.65],
                ['SK', 21.05],
                ['OR', 20.65],
                ['MZ', 19.65],
                ['RJ', 19.12],
                ['MP', 18.01],
                ['BR', 17.45],
                ['KA', 17.25],
                ['MN', 16.26],
                ['JK', 14.65],
                ['JH', 14.20],
                ['AS', 13.25],
                ['NL', 12.65],
                ['ML', 9.56],
                ['HR', 8.26],
                ['AR', 8.12],
                ['UP', 7.26]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 0,
                x:0// 10 pixels down from the top
            }
        }]
    });
}


function ruralDistributionGraphs2() {
    $('#rural_distribution_graph2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '16/05/2016',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '<b>Number of Villages : </b>{point.y} ( {point.percentage:.1f} )%'
        },
        colors: ['#64BFE1','#B9C338','#F5696B','#B13C2E'],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                showInLegend: true,
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        credits : {
            enabled : false
        },
        series: [{
            type: 'pie',
            name: '',
            innerSize: '50%',
            data: [
                ['Electrified',   10.38],
                ['Under Energisation',       56.33],
                ['Under Progress', 24.03],
                ['To be Electrified',    4.77]
            ]
        }]
    });
}

function ruralDistributionGraphs3() {
    $('#rural_distribution_graph3').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#B9C338','#F5696B'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'Mar-2016'
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
                text: 'UE Villages (in no.)'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: '<b>No. of Village Electrified : {point.y}</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['No. of Village Electrified'],
            data: [
                ['2013-14', 1213],
                ['2014-15', 1405],
                ['2015-16', 7108]
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


function ruralDistributionGraphs4() {
    $('#rural_distribution_graph4').highcharts({
        chart: {
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#64BFE1','#B9C338','#F5696B'],
        title: {
            text: ''
        },
        subtitle: {
            text: 'Mar-2016'
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
                text: 'BPL HHS (in no.)'
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            pointFormat: '<b>No. of BPL HHs Electrified : {point.y}</b>'
        },

        credits : {
            enabled : false
        },
        series: [{

            name: ['No. of BPL HHs Electrified'],
            data: [
                ['2013-14', 964173],
                ['2014-15', 759377],
                ['2015-16', 1414948]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#000',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 0,
                x:0// 10 pixels down from the top
            }
        }]
    });
}