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
        text: 'Unemployment rate by state from January 2011 to December 2012'
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
          'District of Columbia',
          'Delaware',
          'Connecticut',
          'Colorado',
          'California',
          'Arkansas',
          'Arizona',
          'Alaska',
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
        y: 150,
        symbolHeight: 750
      },

      tooltip: {
        formatter: function () {
          return 'In <b>' + this.series.xAxis.categories[this.point.x] + '</b>, <b>' +
            this.point.value + '%</b> of <b>' + this.series.yAxis.categories[this.point.y] + '\'s</b> residents were unemployed.';
        }
      },

      series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: data,
        turboThreshold: 100000,
        dataLabels: {
          enabled: true,
          color: '#000000'
        }
      }]

    });
  });
}
