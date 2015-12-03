window.addEventListener('load', draw, false);

function draw () {
  'use strict';
  $.getJSON('line_graph.json', function (data) {

    debugger;
    // Instanciate the map
    $('#container').highcharts({

      title : {
        text : 'US Employement Rate'
      },
      xAxis: {
        categories: ['Jan 2011', 'Feb \'11', 'Mar \'11', 'Apr \'11', 'May \'11', 'Jun \'11',
          'Jul \'11', 'Aug \'11', 'Sep \'11', 'Oct \'11', 'Nov \'11', 'Dec \'11',
          'Jan \'12', 'Feb \'12', 'Mar \'12', 'Apr \'12', 'May \'12', 'Jun \'12',
          'Jul \'12', 'Aug \'12', 'Sep \'12', 'Oct \'12', 'Nov \'12', 'Dec \'12'],
          ceiling: 51
      },
      yAxis: {
        title: {
          text: 'Unemployment Rate %'
        },
      },

      plotOptions: {
        turboThreshold: 1500
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },

      series: data
    });
  });
}
