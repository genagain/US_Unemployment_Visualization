window.addEventListener('load', draw, false);

function draw () {
  $.getJSON('us_map.json', function (data) {

    // Instanciate the map
    $('#container').highcharts('Map', {

      title : {
        text : 'US Employement Rate in December 2012'
      },

      legend: {
        layout: 'horizontal',
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255,0.85)',
        floating: true,
        verticalAlign: 'top',
        y: 25
      },

      mapNavigation: {
        enabled: true
      },

      colorAxis: {
        min: 1,
        type: 'logarithmic',
        minColor: '#EEEEFF',
        maxColor: '#000022',
        stops: [
          [0, '#EFEFFF'],
          [0.67, '#4444FF'],
          [1, '#000022']
        ]
      },

      series : [{
        animation: {
          duration: 1000
        },
        data : data,
        mapData: Highcharts.maps['countries/us/us-all'],
        joinBy: ['postal-code', 'code'],
        dataLabels: {
          enabled: true,
          color: 'white',
          format: '{point.code}'
        },
        name: 'Unemployment Rate',
        tooltip: {
          pointFormat: '{point.code}: {point.value}%'
        }
      }]
    });
  });
}