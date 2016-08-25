function baseLine($containerId) {
    $($containerId).highcharts({
        chart: {
            
            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#F39C12'],
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
            },
            title: {
                text: 'States'
            }
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: '% of States'
            }

        },

        exporting: {
            enabled: false
        },
        legend: {
            enabled: true
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
                ['GJ', 53],
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

function connection($containerId) {
    $($containerId).highcharts({
        chart: {

            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#00A65A'],
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
            },
            title: {
                text: 'States'
            }
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: '% of States'
            }

        },

        exporting: {
            enabled: false
        },
        legend: {
            enabled: true
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
                ['GJ', 53],
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

function complaints($containerId) {
    $($containerId).highcharts({
        chart: {

            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#DD4B39'],
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
            },
            title: {
                text: 'States'
            }
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: '% of States'
            }

        },

        exporting: {
            enabled: false
        },
        legend: {
            enabled: true
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
                ['GJ', 53],
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

function interruption($containerId) {
    $($containerId).highcharts({
        chart: {

            marginRight: 10,
            type: 'column'
        },
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        colors: ['#00C0EF'],
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
            },
            title: {
                text: 'States'
            }
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: '% of States'
            }

        },

        exporting: {
            enabled: false
        },
        legend: {
            enabled: true
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
                ['GJ', 53],
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