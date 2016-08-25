function createSVGMap() {
    AmCharts.makeChart("map", {
        "type": "map",
        "pathToImages": "http://www.amcharts.com/lib/3/images/",
        "addClassNames": true,
        "fontSize": 15,
        "color": "#000000",
        "projection": "mercator",
        "backgroundAlpha": 1,
        "backgroundColor": "rgba(255,255,255,1)",
        "dataProvider": {
            "map": "indiaLow",
            "getAreasFromMap": true,
            "images": [
                {
                    "selectable": true,
                    "longitude": 59.0357,
                    "latitude": 32.684,
                    "label": "Northern Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#ff0000",
                    "labelFontSize": 13.3
                },
                {
                    "selectable": true,
                    "longitude": 59.8854,
                    "latitude": 22.0537,
                    "label": "Western Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#2bccde",
                    "labelFontSize": 13.9
                },
                {
                    "selectable": true,
                    "longitude": 59.4493,
                    "latitude": 15.0695,
                    "label": "Southern Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#ff0000",
                    "labelFontSize": 14.4
                },
                {
                    "selectable": true,
                    "longitude": 89.956,
                    "latitude": 31.8512,
                    "label": "Central Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#a6d600",
                    "labelFontSize": 14.2
                },
                {
                    "selectable": true,
                    "longitude": 94.4332,
                    "latitude": 18.597,
                    "label": "Eastern Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#d6c000",
                    "labelFontSize": 14.2
                },
                {
                    "selectable": true,
                    "longitude": 96.592,
                    "latitude": 28.5,
                    "label": "North-Eastern Region",
                    "labelPosition": "right",
                    "labelColor": "#000",
                    "labelRollOverColor": "#0018ff",
                    "labelFontSize": 12
                }
            ],
            "areas": [
                {
                    "id": "IN-AN",
                    "title": "Islands",
                    "color": "rgba(78,36,69,1)"
                },
                {
                    "id": "IN-AP",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-AR",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-AS",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-BR",
                    "title": "Eastern Region",
                    "color": "rgba(255,198,0,1)"
                },
                {
                    "id": "IN-CH",
                    "title": "Chandigarh",
                    "color": "rgba(255,104,0,1)"
                },
                {
                    "id": "IN-CT",
                    "title": "Central Region",
                    "color": "rgba(198,255,0,1)"
                },
                {
                    "id": "IN-DL",
                    "title": "Northern Region",
                    "color": "rgba(255,104,0,1)"
                },
                {
                    "id": "IN-GA",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-GJ",
                    "title": "Western Region",
                    "color": "rgba(0,255,219,1)"
                },
                {
                    "id": "IN-HP",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-HR",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-JH",
                    "title": "Eastern Region",
                    "color": "rgba(255,198,0,1)"
                },
                {
                    "id": "IN-JK",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-KA",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-KL",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-MH",
                    "title": "Western Region",
                    "color": "rgba(0,255,219,1)"
                },
                {
                    "id": "IN-ML",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-MN",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-MP",
                    "title": "Central Region",
                    "color": "rgba(198,255,0,1)"
                },
                {
                    "id": "IN-MZ",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-NL",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-OR",
                    "title": "Eastern Region",
                    "color": "rgba(255,198,0,1)"
                },
                {
                    "id": "IN-PB",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-RJ",
                    "title": "Western Region",
                    "color": "rgba(0,255,219,1)"
                },
                {
                    "id": "IN-SK",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-TG",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-TN",
                    "title": "Southern Region",
                    "color": "rgba(255,0,31,1)"
                },
                {
                    "id": "IN-TR",
                    "title": "North-Eastern Region",
                    "color": "rgba(0,21,255,1)"
                },
                {
                    "id": "IN-UP",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-UT",
                    "title": "Northern Region",
                    "color": "rgba(255,73,0,1)"
                },
                {
                    "id": "IN-WB",
                    "title": "Eastern Region",
                    "color": "rgba(255,198,0,1)"
                }
            ],
            "lines": [
                {
                    "selectable": true,
                    "color": "rgba(78,36,69,1)",
                    "longitudes": [
                        74.1031,
                        63.8891
                    ],
                    "latitudes": [
                        26.3567,
                        26.2685
                    ],
                    "arrow": "none"
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        76.5466,
                        65.5019
                    ],
                    "latitudes": [
                        31.7258,
                        31.684
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },

                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(69,33,33,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        63.7425,
                        63.7425
                    ],
                    "latitudes": [
                        26.3567,
                        23.2785
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        76.7421,
                        67.0168
                    ],
                    "latitudes": [
                        14.0695,
                        14.2125
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        80.6029,
                        84.2193
                    ],
                    "latitudes": [
                        24.0439,
                        31.8094
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        84.2193,
                        89.6439
                    ],
                    "latitudes": [
                        31.8512,
                        31.8512
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        85.4899,
                        89.2041
                    ],
                    "latitudes": [
                        22.8714,
                        18.7832
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        93.7002,
                        89.1552
                    ],
                    "latitudes": [
                        18.9693,
                        18.8298
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                },
                {
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "longitudes": [
                        55.0924,
                        54.4082
                    ],
                    "latitudes": [
                        31.2647,
                        31.2227
                    ],
                    "arrow": "none"
                },
                {
                    "arc": 0,
                    "selectable": true,
                    "color": "rgba(0,0,0,1)",
                    "thickness": 1,
                    "dashLength": 0,
                    "longitudes": [
                        94.4332,
                        99.809
                    ],
                    "latitudes": [
                        27.9749,
                        28.0183
                    ],
                    "arrow": "none",
                    "arrowSize": 6
                }
            ]
        },
        "balloon": {
            "horizontalPadding": 15,
            "borderAlpha": 0,
            "borderThickness": 1,
            "verticalPadding": 15
        },
        "areasSettings": {
            "color": "rgba(255,255,255,1)",
            "outlineColor": "rgba(255,255,255,1)",
            "rollOverOutlineColor": "rgba(255,255,255,1)",
            "rollOverBrightness": 20,
            "selectedBrightness": 20,
            "selectable": true,
            "unlistedAreasAlpha": 0,
            "unlistedAreasOutlineAlpha": 0
        },
        "imagesSettings": {
            "alpha": 1,
            "color": "rgba(255,255,255,1)",
            "outlineAlpha": 0,
            "rollOverOutlineAlpha": 0,
            "outlineColor": "rgba(255,255,255,1)",
            "rollOverBrightness": 20,
            "selectedBrightness": 20,
            "selectable": true
        },
        "linesSettings": {
            "color": "rgba(255,255,255,1)",
            "selectable": true,
            "rollOverBrightness": 20,
            "selectedBrightness": 20
        },
        "zoomControl": {
            "zoomControlEnabled": false,
            "homeButtonEnabled": true,
            "panControlEnabled": false,
            "right": 38,
            "bottom": 30,
            "minZoomLevel": 0.25,
            "gridHeight": 100,
            "gridAlpha": 0.1,
            "gridBackgroundAlpha": 0,
            "gridColor": "#FFFFFF",
            "draggerAlpha": 1,
            "buttonCornerRadius": 2
        }
    });
}