
function fundingGraph1() {
    $('#funding_graph1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['UP', 'MH', 'TN', 'WB', 'MP', 'RJ', 'RR', 'GJ', 'KA', 'JK','PG', 'JH'],
            title: {
                text: null
            }
        },
        colors:['#BAA3E0','#32C9CD'],
        yAxis: {
            min: 0,
            title: {
                text: 'Rupees (Crore)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Approved Cost (Rs. in Crores) ',
            data: [107, 310, 635, 203, 224, 274,624, 785, 846, 154, 458, 1224]
        }, {
            name: 'Grant (Rs. in Crores)',
            data: [807, 610, 1235, 603, 724, 374,124, 585, 546, 754, 258, 624]
        }]
    });
}


function fundingGraph2() {
    $('#funding_graph2').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['UP', 'MH', 'TN', 'WB', 'MP', 'RJ', 'RR', 'GJ', 'KA', 'JK','PG', 'JH'],
            title: {
                text: null
            }
        },
        colors:['#32C9CD'],
        yAxis: {
            min: 0,
            title: {
                text: 'Rupees (Crores)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Funds Released Under DDUGJY (Rs. in Crores) ',
            data: [107, 310, 635, 203, 224, 274,624, 785, 846, 154, 458, 1224]
        }]
    });
}
