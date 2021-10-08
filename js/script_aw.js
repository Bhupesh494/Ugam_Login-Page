
$(document).ready(function () {
    $('.loadingGif').fadeOut('slow');

    $('html, body').animate({
        scrollTop: 1
    }, 'slow');

    // $('body').prepend('<div class="SwitchPortrait"></div>');
    // $('.SwitchPortrait').append('<div style="display:table-cell;vertical-align:middle"><img src="../images/landscape.png"></img></div>');
    // $('.SwitchPortrait').css({
    //     "position": "fixed",
    //     "width": "100%",
    //     "height": "100%",
    //     "z-index": "9999",
    //     "background": "white",
    //     "display": "none",
    //     "text-align": "center",
    //     "overflow": "hidden",
    //     "top": "0",
    //     "left": "0",
    // });
    var mediaQueryStyleexLarge = '<style>@media (max-width: 1044px){.menu{width:83%;}}</style>';
    $('head').append(mediaQueryStyleexLarge);
    var mediaQueryStyleLarge = '<style>@media (max-width: 992px){.filter_desktop_collapse{display:none;}.filter_desktop_collapse_dropdown{display:none;}.filter_Mobile{display:flex;}.menu{width:78%;}}</style>';
    $('head').append(mediaQueryStyleLarge);

    var mediaQueryStyleMedium = '<style>@media (max-width: 768px){.navbar-brand{padding:0;}.wrapper{padding-top:0;}.nav-item{padding:10px 1rem;width:100%;}.navbar{padding:0;}.dropdown-menu{top: 98%;    border-radius: 0;left: -1px;  width: 85%;border:0;}.dropdown-menu a{text-align:center;}.card-title{width:91%;}.sm_width{width:20%;}.menu{width:250px;}}</style>';
    $('head').append(mediaQueryStyleMedium);

    /* mobile phone landscape */
    // $('head').append('<style> @media only screen and (max-width: 767px) and (max-height: 641px) and (orientation: landscape) { .SwitchPortrait{ display : table !important; }  }</style>');

    var mediaQueryStyleSmall = '<style>@media (max-width: 480px){#container_4{min-width:310px !important;}.keySummary_text{font-size:0.8rem;}.card-title {font-size:1.1rem;}.card-title{width:82%;}.sm_width{width:25%;}}</style>';
    $('head').append(mediaQueryStyleSmall);

    $('.nav_list').not(':last').each(function() {
        $(this).bind('click',function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        
    });

    $('#header__icon').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('with--sidebar');
    });

    $('#site-cache').click(function (e) {
        $('body').removeClass('with--sidebar');
    });


    //Fancy dropdown
    $('select').fancySelect();

    // first part
    Highcharts.chart('container_1', {
  chart: {
    type: 'column'
  },
  title: {
   text: null
  },
  xAxis: {
      "categories": [
          "Brand1",
          "Brand2",
          "Brand3",
          "Brand4",
          "Brand5",
          "Brand6",
          "Brand7"
      ]
  },
  yAxis: {
    min: 0,
    title: {
      text: ''
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
      }
    }
  },
  legend: {
      "align": "right",
    x: -28,
    verticalAlign: 'top',
    y: -10,
    floating: false,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    borderColor: '#CCC',
    borderWidth: 0,
    shadow: false,
      "itemStyle": {
          "fontFamily": "\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
          "color": "#333333",
          "fontSize": "12px",
          "fontWeight": "bold",
          "fontStyle": "normal",
          "cursor": "pointer"
      }
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
  },
        series: [{
            name: 'Total Awareness',
            data: [32, 42, 49, 25, 60, 43, 37]
        }, {
            name: 'Unaided Awareness',
            data: [63, 52, 32, 7, 9, 12, 33]
        }],
        "colors": [
            "#00c5ed",
            "#00abe0"
        ],
        "responsive": {
            "rules": []
        },
        "subtitle": {},
        "exporting": {
            "enabled": false
        },
        "credits": {
            "enabled": false
        }
});
    
    //second part
    Highcharts.chart('container_2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6','Brand7'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
        "plotOptions": {
            "bar": {
                "dataLabels": {
                    "enabled": true
                }
            },
            "series": {
                "animation": false,
                "dataLabels": {}
            }
        },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: -10,
        floating: false,
        borderWidth: 0,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: false
    },
    credits: {
        enabled: false
    },
    // series: [{
    //     name: 'Year 1800',
    //     data: [107, 31, 635, 203, 23]
    // }, ],
        "series": [
            {
                "name": "Wave 1",
                data: [90, 89, 79, 44, 64, 50, 65],
                "turboThreshold": 0,
                "_colorIndex": 0,
                "marker": {
                    "enabled": false
                },
                "dashStyle": "Solid",
                "colorByPoint": true
            }
        ],
        "colors": [
            "#00c5ed",
            "#00abe0", "#0096d4", "#008aff", "#006ebb", "#0055a1", "#004b8f", "#003f76","#00355f"
        ],
        "lang": {},
        "exporting": {
            "enabled": false
        },
        "credits": {
            "enabled": false
        },
});
    
    //third part
    
Highcharts.chart('container_3', {
  chart: {
    type: 'bar'
  },
    "title": {
        "text": ""
    },
    "subtitle": {
        "text": ""
    },
  xAxis: {
      categories: ['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6', 'Brand7'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'horizontal',
      align: 'right',
    verticalAlign: 'top',
    x: -42,
    y: -10,
    floating: false,
      "borderWidth": 0,
      "backgroundColor": "#FFFFFF",
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: false
  },
  credits: {
    enabled: false
  },
    series: [{
        name: 'Wave 2',
        data: [74, 73, 63, 28, 48, 34, 49],
        "_colorIndex": 0,
        "marker": {
            "enabled": false
        },
        "colorByPoint": true
    },
//    {
//     name: 'Year 1900',
//     data: [133, 156, 947, 408, 6]
//   }, {
//     name: 'Year 2000',
//     data: [814, 841, 3714, 727, 31]
//   }, {
//     name: 'Year 2016',
//     data: [1216, 1001, 4436, 738, 40]
//   }
],
    "colors": [
        "#00c5ed",
        "#00abe0",
        "#0096d4",
        "#008aff",
        "#006ebb",
        "#0055a1",
        "#004b8f",
        "#003f76"
    ],
    "exporting": {
        "enabled": false
    },
    "lang": {}
});
    //forth part
    
// Build the chart
Highcharts.chart('container_4', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Top 2',
            y: 56,
            sliced: true,
            selected: true
        }, {
            name: 'Bottom 2',
            y: 29
        }, {
            name: 'Neutral',
            y: 15
        }]
    }],
    "colors": [
        "#006ebb",
        "#013660",
        "#0096D3",
        "#008aff",
        "#00ABDF"
    ],
    "xAxis": {
        "title": {},
        "labels": {}
    },
    "legend": {
        "layout": "horizontal",
        "align": "center",
        "x": -13,
        "verticalAlign": "top",
        "y": 0,
        "enabled": true
    },
    "exporting": {
        "enabled": false
    },
    "lang": {},
    "credits": {
        "enabled": false
    }
});



});
// $(window).resize(function () {
//     if ($(window).width() > 992) {
//         $('#myModalFilter').hide().removeClass('show');
//         $('.modal-backdrop').removeClass('show');
//     }else{
//         $('#myModalFilter').show()
//         //$('.modal-backdrop').removeClass('show');
//     }
// });

$(window).resize(function () {
    //$('#site-cache').toggle('click')
    $('body').removeClass('with--sidebar');  
})