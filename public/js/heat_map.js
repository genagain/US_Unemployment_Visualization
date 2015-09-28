window.addEventListener('load', draw, false);
      function draw () {
       'use strict';
       $('#container').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Sales per employee per weekday'
        },

        xAxis: {
            categories: ['January 2011',
                         'February 2011',
                         'March 2011',
                         'April 2011',
                         'May 2011',
                         'June 2011',
                         'July 2011',
                         'August 2011',
                         'September 2011',
                         'October 2011',
                         'November 2011',
                         'December 2011',
                         'January 2012',
                         'February 2012',
                         'March 2012',
                         'April 2012',
                         'May 2012',
                         'June 2012',
                         'July 2012',
                         'August 2012',
                         'September 2012',
                         'October 2012',
                         'November 2012',
                         'December 2012']
        },

        yAxis: {
            categories: ['Wyoming'
                         'Wisconsin'
                         'West Virginia'
                         'Washington'
                         'Virginia'
                         'Vermont'
                         'Utah'
                         'Texas'
                         'Tennessee'
                         'South Dakota'
                         'South Carolina'
                         'Rhode Island'
                         'Pennsylvania'
                         'Oregon'
                         'Oklahoma'
                         'Ohio'
                         'North Dakota'
                         'North Carolina'
                         'New York'
                         'New Mexico'
                         'New Jersey'
                         'New Hampshire'
                         'Nevada'
                         'Nebraska'
                         'Montana'
                         'Missouri'
                         'Mississippi'
                         'Minnesota'
                         'Michigan'
                         'Massachusetts'
                         'Maryland'
                         'Maine'
                         'Louisiana'
                         'Kentucky'
                         'Kansas'
                         'Iowa'
                         'Indiana'
                         'Illinois'
                         'Idaho'
                         'Hawaii'
                         'Georgia'
                         'Florida'
                         'District of Columbia'
                         'Delaware'
                         'Connecticut'
                         'Colorado'
                         'California'
                         'Arkansas'
                         'Arizona'
                         'Alaska'
                         'Alabama'],
           title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });

    }
