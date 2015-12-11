window.addEventListener('load', draw, false);

function draw () {
  var url = window.location.href;
  var time = url.match(/[a-z]{3,4}_\d{4}$/)[0];
  var endpoint = "\/us_map.json?time=" + time;
  var calendar = {
                'dec_2012' : 'December 2012',
                'nov_2012' : 'November 2012',
                'oct_2012' : 'October 2012',
                'sept_2012' : 'September 2012',
                'aug_2012' : 'August 2012',
                'july_2012' : 'July 2012',
                'june_2012' : 'June 2012',
                'may_2012' : 'May 2012',
                'apr_2012' : 'April 2012',
                'mar_2012' : 'March 2012',
                'feb_2012' : 'February 2012',
                'jan_2012' : 'January 2012',
                'dec_2011' : 'December 2011',
                'nov_2011' : 'November 2011',
                'oct_2011' : 'October 2011',
                'sept_2011' : 'September 2011',
                'aug_2011' : 'August 2011',
                'july_2011' : 'July 2011',
                'june_2011' : 'June 2011',
                'may_2011' : 'May 2011',
                'apr_2011' : 'April 2011',
                'mar_2011' : 'March 2011',
                'feb_2011' : 'February 2011',
                'jan_2011' : 'January 2011'
  };
  // debugger;
  $.getJSON(endpoint, function (data) {

    debugger;
    // Instanciate the map
    $('#container').highcharts('Map', {

      title : {
        text : 'US Employement Rate in ' + calendar[time]
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
