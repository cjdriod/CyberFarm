(function ($) {
  var ctx = document.getElementById("widgetChart1");
  if (ctx) {
    ctx.height = 130;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['13 August 10:10', '13 August 10:11', '13 August 10:12', '13 August 10:13', '13 August 10:14', '13 August 10:15'],
        type: 'line',
        datasets: [{
          data: [33.3, 33.0, 29, 28, 26, 27.1],
          label: '',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }

  var ctx2 = document.getElementById("widgetChart2");
  if (ctx2) {
    ctx2.height = 130;
    var myChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['13 August 10:10', '13 August 10:11', '13 August 10:12', '13 August 10:13', '13 August 10:14', '13 August 10:15'],
        type: 'line',
        datasets: [{
          data: [1, 18, 9, 17, 34, 22],
          label: '',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }

  var ctx3 = document.getElementById("widgetChart3");
  if (ctx3) {
    ctx3.height = 130;
    var myChart = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['13 August 10:10', '13 August 10:11', '13 August 10:12', '13 August 10:13', '13 August 10:14', '13 August 10:15'],
        type: 'line',
        datasets: [{
          data: [1, 18, 9, 17, 34, 22],
          label: '',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }


  var ctx4 = document.getElementById("widgetChart4");
  if (ctx4) {
    ctx4.height = 130;
    var myChart = new Chart(ctx4, {
      type: 'line',
      data: {
        labels: ['13 August 10:10', '13 August 10:11', '13 August 10:12', '13 August 10:13', '13 August 10:14', '13 August 10:15'],
        type: 'line',
        datasets: [{
          data: [1, 18, 9, 17, 34, 22],
          label: '',
          backgroundColor: 'transparent',
          borderColor: 'rgba(255,255,255,.55)',
        },]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
            }
          }]
        },
        title: {
          display: false,
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });
  }



})(jQuery);