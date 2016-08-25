function createInstalledCapacityInfoGraph($container) {
    $($container).highcharts({
        chart: {
            type: 'spline',
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: ''
        },
        colors: ["#F3D5CE", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 80
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%y', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
}

function cumulativeGeneration($containerId) {
    $($containerId).highcharts({
        chart: {
            type: 'spline',
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: ''
        },
        colors: ["#F5F5AC", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 80
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%y', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
}

function transportationCapacity($containerId){
    $($containerId).highcharts({
        chart: {
            type: 'spline',
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: ''
        },
        colors: ["#BDF1DE", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 80
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%y', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
}

function transmissionCapacity($containerId) {
    $($containerId).highcharts({
        chart: {
            type: 'spline',
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: ''
        },
        colors: ["#E08C93", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 80
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#000'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%y', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
}

function  noRecord($containerId) {
    $($containerId).highcharts({
        chart: {
            type: 'spline',
            backgroundColor: null,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10
        },
        title: {
            text: 'No Record Found'
        },
        colors: ["#E08C93", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 80
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#000'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%y', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
}