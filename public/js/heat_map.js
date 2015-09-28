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
        categories: ['Wyoming',
          'Wisconsin',
          'West Virginia',
          'Washington',
          'Virginia',
          'Vermont',
          'Utah',
          'Texas',
          'Tennessee',
          'South Dakota',
          'South Carolina',
          'Rhode Island',
          'Pennsylvania',
          'Oregon',
          'Oklahoma',
          'Ohio',
          'North Dakota',
          'North Carolina',
          'New York',
          'New Mexico',
          'New Jersey',
          'New Hampshire',
          'Nevada',
          'Nebraska',
          'Montana',
          'Missouri',
          'Mississippi',
          'Minnesota',
          'Michigan',
          'Massachusetts',
          'Maryland',
          'Maine',
          'Louisiana',
          'Kentucky',
          'Kansas',
          'Iowa',
          'Indiana',
          'Illinois',
          'Idaho',
          'Hawaii',
          'Georgia',
          'Florida',
          'Washington DC',
          'Delaware',
          'Connecticut',
          'Colorado',
          'California',
          'Arkansas',
          'Arizona',
          'Alaska',
          'Alabama']
      },

      yAxis: {
        categories: ['January 2011',
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
          'December \'12']
      },
      colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: '#0B0B47'
      },

      legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 50,
        symbolHeight: 400
      },

      tooltip: {
        formatter: function () {
          return 'In <b>' + this.series.yAxis.categories[this.point.y] + '</b>, <b>' +
            this.point.value + '%</b> of <b>' + this.series.xAxis.categories[this.point.x] + '\'s</b> residents were unemployed.';
        }
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
