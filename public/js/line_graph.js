window.addEventListener('load', draw, false);
function draw () {
  'use strict';

  $.getJSON('/heat_map.json', function (data) {

    $('#container').highcharts({

      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
      },


      title: {
        text: 'Unemployment rate by state'
      },

      xAxis: {
        categories: [ 'January 2011',
                      'February \'11',
                      'March \'11',
                      'April \'11',
                      'May \'11',
                      'June \'11',
                      'July \'11',
                      'August \'11',
                      'September \'11',
                      'October \'11',
                      'November \'11',
                      'December \'11',
                      'January \'12',
                      'February \'12',
                      'March \'12',
                      'April \'12',
                      'May \'12',
                      'June \'12',
                      'July \'12',
                      'August \'12',
                      'September \'12',
                      'October \'12',
                      'November \'12',
                      'December \'12'
        ]

      },
      yAxis: {
        title: {
          text: 'Unemployment Rate (%)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },

      series: [{
        name: 'Unemployment Rate',
        borderWidth: 1,
        data: data,
        turboThreshold: 100000
      }]

    });
  });
}
