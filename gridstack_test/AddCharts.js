//=開始填入chart=====================================================================================================================================

    /**
      * ---------------------------------------
      * This demo was created using amCharts 5.
      * For more information visit:
      * https://www.amcharts.com/
      * Documentation is available at:
      * https://www.amcharts.com/docs/v5/
      * ---------------------------------------
      */

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv1");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      text: am5.color(0x095256),
      fill: am5.color(0x095256),
      layout: root.verticalLayout
    }));

    //改變表格格線的顏色
    root.interfaceColors.set("grid", am5.color(0xCDCDCD));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      color: am5.color(0xFF621F),
      x: am5.p50
    }))

    var data = [{
      "year": "2005",
      "income": 23.5,
      "expenses": 18.1
    }, {
      "year": "2006",
      "income": 26.2,
      "expenses": 22.8
    }, {
      "year": "2007",
      "income": 30.1,
      "expenses": 23.9
    }, {
      "year": "2008",
      "income": 29.5,
      "expenses": 25.1
    }, {
      "year": "2009",
      "income": 24.6,
      "expenses": 25
    }];;


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererY.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    yAxis.data.setAll(data);

    yAxis.get("renderer").labels.template.setAll({
      fill: am5.color(0xFFFFFF)
    });



    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, {
        })
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fill: am5.color(0xFFFFFF)
    });

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "income",
      categoryYField: "year",
      sequencedInterpolation: true,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
      })
    }));

    series1.columns.template.setAll({
      height: am5.percent(70)
    });

    var series2 = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Expenses",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "expenses",
      categoryYField: "year",
      sequencedInterpolation: true,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
      })
    }));

    series2.strokes.template.setAll({
      strokeWidth: 2,
    });


    series2.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0.5,
        sprite: am5.Circle.new(root, {
          radius: 5,
          stroke: series2.get("stroke"),
          strokeWidth: 2,
          fill: root.interfaceColors.get("background")
        })
      });
    });


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }));


    legend.data.setAll(chart.series.values);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomY"
    }));
    cursor.lineX.set("visible", false);

    series1.data.setAll(data);
    series2.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series1.appear();
    series2.appear();

    chart.appear(1000, 100);


    var myTheme = am5.Theme.new(root);
    myTheme.rule("Label").setAll({
      fill: am5.color(0xFFFFFF),
      fontSize: "0.8em"
    });

    root.setThemes([
      am5themes_Animated.new(root),
      myTheme
    ]);


    //=========================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv2");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          focusable: true,
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX"
        })
      );

      //改變表格顏色
      root.interfaceColors.set("grid", am5.color(0xCDCDCD));

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      var color = root.interfaceColors.get("background");

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(
        am5xy.CandlestickSeries.new(root, {
          fill: color,
          stroke: color,
          name: "MDXI",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "close",
          openValueYField: "open",
          lowValueYField: "low",
          highValueYField: "high",
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "open: {openValueY}\nlow: {lowValueY}\nhigh: {highValueY}\nclose: {valueY},\nmediana: {mediana}"
          })
        })
      );

      // mediana series
      var medianaSeries = chart.series.push(
        am5xy.StepLineSeries.new(root, {
          stroke: root.interfaceColors.get("background"),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "mediana",
          valueXField: "date",
          noRisers: true
        })
      );

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis
      }));
      cursor.lineY.set("visible", false);

      var data = [
        {
          date: "2019-08-01",
          open: 132.3,
          high: 136.96,
          low: 131.15,
          close: 136.49
        },
        {
          date: "2019-08-02",
          open: 135.26,
          high: 135.95,
          low: 131.5,
          close: 131.85
        },
        {
          date: "2019-08-03",
          open: 129.9,
          high: 133.27,
          low: 128.3,
          close: 132.25
        },
        {
          date: "2019-08-04",
          open: 132.94,
          high: 136.24,
          low: 132.63,
          close: 135.03
        },
        {
          date: "2019-08-05",
          open: 136.76,
          high: 137.86,
          low: 132.0,
          close: 134.01
        },
        {
          date: "2019-08-06",
          open: 131.11,
          high: 133.0,
          low: 125.09,
          close: 126.39
        },
        {
          date: "2019-08-07",
          open: 130.11,
          high: 133.0,
          low: 125.09,
          close: 127.39
        },
        {
          date: "2019-08-08",
          open: 125.11,
          high: 126.0,
          low: 121.09,
          close: 122.39
        },
        {
          date: "2019-08-09",
          open: 131.11,
          high: 133.0,
          low: 122.09,
          close: 124.39
        }
      ];

      addMediana();

      function addMediana() {
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          dataItem.mediana =
            Number(dataItem.low) + (Number(dataItem.high) - Number(dataItem.low)) / 2;
        }
      }

      series.data.processor = am5.DataProcessor.new(root, {
        dateFields: ["date"],
        dateFormat: "yyyy-MM-dd"
      });

      series.data.setAll(data);
      medianaSeries.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000, 100);
      medianaSeries.appear(1000, 100);
      chart.appear(1000, 100);

      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "0.8em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

    }); // end am5.ready()
    //===============================================================================================================================
    am5.ready(function () {

      // Data
      var data = [
        {
          date: "2013-01-16",
          market0: 71,
          market1: 75,
          sales0: 5,
          sales1: 9
        },
        {
          date: "2013-01-17",
          market0: 74,
          market1: 78,
          sales0: 4,
          sales1: 6
        },
        {
          date: "2013-01-18",
          market0: 78,
          market1: 88,
          sales0: 5,
          sales1: 2
        },
        {
          date: "2013-01-19",
          market0: 85,
          market1: 89,
          sales0: 8,
          sales1: 9
        },
        {
          date: "2013-01-20",
          market0: 82,
          market1: 89,
          sales0: 9,
          sales1: 6
        },
        {
          date: "2013-01-21",
          market0: 83,
          market1: 85,
          sales0: 3,
          sales1: 5
        },
        {
          date: "2013-01-22",
          market0: 88,
          market1: 92,
          sales0: 5,
          sales1: 7
        },
        {
          date: "2013-01-23",
          market0: 85,
          market1: 90,
          sales0: 7,
          sales1: 6
        },
        {
          date: "2013-01-24",
          market0: 85,
          market1: 91,
          sales0: 9,
          sales1: 5
        },
        {
          date: "2013-01-25",
          market0: 80,
          market1: 84,
          sales0: 5,
          sales1: 8
        },
        {
          date: "2013-01-26",
          market0: 87,
          market1: 92,
          sales0: 4,
          sales1: 8
        },
        {
          date: "2013-01-27",
          market0: 84,
          market1: 87,
          sales0: 3,
          sales1: 4
        },
        {
          date: "2013-01-28",
          market0: 83,
          market1: 88,
          sales0: 5,
          sales1: 7
        },
        {
          date: "2013-01-29",
          market0: 84,
          market1: 87,
          sales0: 5,
          sales1: 8
        },
        {
          date: "2013-01-30",
          market0: 81,
          market1: 85,
          sales0: 4,
          sales1: 7
        }
      ];

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv3");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX"]
      });

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout
        })
      );

      //改變表格格線顏色
      root.interfaceColors.set("grid", am5.color(0xFFFFFF));

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "zoomX"
      }));
      cursor.lineY.set("visible", false);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {}),
          tooltip: am5.Tooltip.new(root, {}),
          tooltipDateFormat: "yyyy-MM-dd"
        })
      );

      var yAxis0 = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      var yRenderer1 = am5xy.AxisRendererY.new(root, {
        opposite: true
      });
      yRenderer1.grid.template.set("forceHidden", true);

      var yAxis1 = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: yRenderer1,
          syncWithAxis: yAxis0
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var columnSeries1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Actual sales",
          xAxis: xAxis,
          yAxis: yAxis0,
          valueYField: "sales1",
          valueXField: "date",
          clustered: false,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{name}: {valueY}"
          })
        })
      );

      columnSeries1.columns.template.setAll({
        width: am5.percent(60),
        fillOpacity: 0.5,
        strokeOpacity: 0
      });


      columnSeries1.data.processor = am5.DataProcessor.new(root, {
        dateFields: ["date"],
        dateFormat: "yyyy-MM-dd"
      });

      var columnSeries0 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Target sales",
          xAxis: xAxis,
          yAxis: yAxis0,
          valueYField: "sales0",
          valueXField: "date",
          clustered: false,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{name}: {valueY}"
          })
        })
      );

      columnSeries0.columns.template.set("width", am5.percent(40));

      var series0 = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: "Market days",
          xAxis: xAxis,
          yAxis: yAxis1,
          valueYField: "market0",
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{name}: {valueY}"
          })
        })
      );

      series0.strokes.template.setAll({
        strokeWidth: 2
      });

      // Add bullet
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
      series0.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            stroke: series0.get("fill"),
            strokeWidth: 2,
            fill: root.interfaceColors.get("background"),
            radius: 5
          })
        });
      });

      var series1 = chart.series.push(
        am5xy.SmoothedXLineSeries.new(root, {
          name: "Market days all",
          xAxis: xAxis,
          yAxis: yAxis1,
          valueYField: "market1",
          valueXField: "date"
        })
      );

      series1.strokes.template.setAll({
        strokeWidth: 2,
        strokeDasharray: [2, 2]
      });

      var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
        pointerOrientation: "horizontal"
      }));
      tooltip1.label.set("text", "{name}: {valueY}");

      // Add bullet
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
      series1.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            stroke: series1.get("fill"),
            strokeWidth: 2,
            fill: root.interfaceColors.get("background"),
            radius: 5
          })
        });
      });

      // Add scrollbar
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      var scrollbar = chart.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
        orientation: "horizontal",
        height: 10
      }));

      var sbDateAxis = scrollbar.chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: {
            timeUnit: "day",
            count: 1
          },
          renderer: am5xy.AxisRendererX.new(root, {})
        })
      );

      var sbValueAxis0 = scrollbar.chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      var sbValueAxis1 = scrollbar.chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      var sbSeries0 = scrollbar.chart.series.push(
        am5xy.ColumnSeries.new(root, {
          valueYField: "sales0",
          valueXField: "date",
          xAxis: sbDateAxis,
          yAxis: sbValueAxis0
        })
      );

      sbSeries0.columns.template.setAll({ fillOpacity: 0.5, strokeOpacity: 0 });

      var sbSeries1 = scrollbar.chart.series.push(
        am5xy.LineSeries.new(root, {
          valueYField: "market0",
          valueXField: "date",
          xAxis: sbDateAxis,
          yAxis: sbValueAxis1
        })
      );

      var legend = chart.children.push(
        am5.Legend.new(root, {
          x: am5.p50,
          centerX: am5.p50,
          color: am5.color(0xFF621F)
        })
      );


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "0.8em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);


      legend.data.setAll(chart.series.values);

      columnSeries1.data.setAll(data);
      columnSeries0.data.setAll(data);

      series0.data.setAll(data);
      series1.data.setAll(data);

      sbSeries0.data.setAll(data);
      sbSeries1.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series0.appear(1000);
      series1.appear(1000);
      chart.appear(1000, 100);


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "0.8em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

    });

    //Gauge======================================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv4");


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);


      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      var chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: 160,
        endAngle: 380
      }));


      //改變表格格線顏色
      root.interfaceColors.set("grid", am5.color(0xFFFFFF));


      // Create axis and its renderer
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
      var axisRenderer = am5radar.AxisRendererCircular.new(root, {
        innerRadius: -40
      });

      axisRenderer.grid.template.setAll({
        stroke: root.interfaceColors.get("background"),
        visible: true,
        strokeOpacity: 0.8
      });

      var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: -40,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer
      }));


      // Add clock hand
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
      var axisDataItem = xAxis.makeDataItem({});

      var clockHand = am5radar.ClockHand.new(root, {
        pinRadius: am5.percent(20),
        radius: am5.percent(100),
        bottomWidth: 40
      })

      var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
        sprite: clockHand
      }));

      xAxis.createAxisRange(axisDataItem);

      var label = chart.radarContainer.children.push(am5.Label.new(root, {
        fill: am5.color(0xffffff),
        centerX: am5.percent(50),
        textAlign: "center",
        centerY: am5.percent(50),
        fontSize: "3em"
      }));

      axisDataItem.set("value", 50);
      bullet.get("sprite").on("rotation", function () {
        var value = axisDataItem.get("value");
        var text = Math.round(axisDataItem.get("value")).toString();
        var fill = am5.color(0x000000);
        xAxis.axisRanges.each(function (axisRange) {
          if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
            fill = axisRange.get("axisFill").get("fill");
          }
        })

        label.set("text", Math.round(value).toString());

        clockHand.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
        clockHand.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
      });

      setInterval(function () {
        axisDataItem.animate({
          key: "value",
          to: Math.round(Math.random() * 140 - 40),
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }, 2000)

      chart.bulletsContainer.set("mask", undefined);


      // Create axis ranges bands
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
      var bandsData = [{
        title: "A",
        color: "#ee1f25",
        lowScore: -40,
        highScore: -20
      }, {
        title: "B",
        color: "#f04922",
        lowScore: -20,
        highScore: 0
      }, {
        title: "C",
        color: "#fdae19",
        lowScore: 0,
        highScore: 20
      }, {
        title: "D",
        color: "#f3eb0c",
        lowScore: 20,
        highScore: 40
      }, {
        title: "E",
        color: "#b0d136",
        lowScore: 40,
        highScore: 60
      }, {
        title: "F",
        color: "#54b947",
        lowScore: 60,
        highScore: 80
      }, {
        title: "G",
        color: "#0f9747",
        lowScore: 80,
        highScore: 100
      }];

      am5.array.each(bandsData, function (data) {
        var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));

        axisRange.setAll({
          value: data.lowScore,
          endValue: data.highScore
        });

        axisRange.get("axisFill").setAll({
          visible: true,
          fill: am5.color(data.color),
          fillOpacity: 0.8
        });

        axisRange.get("label").setAll({
          text: data.title,
          inside: true,
          radius: 15,
          fontSize: "0.9em",
          fill: root.interfaceColors.get("background")
        });
      });


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

      // Make stuff animate on load
      chart.appear(1000, 100);

    });
    //=========================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv5");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      var chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(20),
        startAngle: -90,
        endAngle: 180
      }));


      // Data
      var data = [{
        category: "Research",
        value: 80,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(0)
        }
      }, {
        category: "Marketing",
        value: 35,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(1)
        }
      }, {
        category: "Distribution",
        value: 92,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(2)
        }
      }, {
        category: "Human Resources",
        value: 68,
        full: 100,
        columnSettings: {
          fill: chart.get("colors").getIndex(3)
        }
      }];

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
      var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
        behavior: "zoomX"
      }));

      cursor.lineY.set("visible", false);

      // Create axes and their renderers
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
      var xRenderer = am5radar.AxisRendererCircular.new(root, {
        //minGridDistance: 50
      });

      xRenderer.labels.template.setAll({
        radius: 10
      });

      xRenderer.grid.template.setAll({
        forceHidden: true
      });

      var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {})
      }));


      var yRenderer = am5radar.AxisRendererRadial.new(root, {
        minGridDistance: 20
      });

      yRenderer.labels.template.setAll({
        centerX: am5.p100,
        fontWeight: "500",
        fontSize: 18,
        templateField: "columnSettings"
      });

      yRenderer.grid.template.setAll({
        forceHidden: true
      });

      var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer
      }));

      yAxis.data.setAll(data);


      // Create series
      // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
      var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        fill: root.interfaceColors.get("alternativeBackground")
      }));

      series1.columns.template.setAll({
        width: am5.p100,
        fillOpacity: 0.08,
        strokeOpacity: 0,
        cornerRadius: 20
      });

      series1.data.setAll(data);


      var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        clustered: false,
        valueXField: "value",
        categoryYField: "category"
      }));

      series2.columns.template.setAll({
        width: am5.p100,
        strokeOpacity: 0,
        tooltipText: "{category}: {valueX}%",
        cornerRadius: 20,
        templateField: "columnSettings"
      });

      series2.data.setAll(data);

      // Animate chart and series in
      // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
      series1.appear(1000);
      series2.appear(1000);
      chart.appear(1000, 100);


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

    });

    //====================================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv6");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/radar-chart/
      var chart = root.container.children.push(
        am5radar.RadarChart.new(root, {
          panX: false,
          panY: false,
          startAngle: 180,
          endAngle: 360
        })
      );

      chart.getNumberFormatter().set("numberFormat", "#'%'");

      // Create axis and its renderer
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
      var axisRenderer = am5radar.AxisRendererCircular.new(root, {
        innerRadius: -40
      });

      axisRenderer.grid.template.setAll({
        stroke: root.interfaceColors.get("background"),
        visible: true,
        strokeOpacity: 0.8
      });

      var xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          maxDeviation: 0,
          min: 0,
          max: 100,
          strictMinMax: true,
          renderer: axisRenderer
        })
      );

      // Add clock hand
      // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
      var axisDataItem = xAxis.makeDataItem({});

      var clockHand = am5radar.ClockHand.new(root, {
        pinRadius: 50,
        radius: am5.percent(100),
        innerRadius: 50,
        bottomWidth: 0,
        topWidth: 0
      });

      clockHand.pin.setAll({
        fillOpacity: 0,
        strokeOpacity: 0.5,
        stroke: am5.color(0x000000),
        strokeWidth: 1,
        strokeDasharray: [2, 2]
      });
      clockHand.hand.setAll({
        fillOpacity: 0,
        strokeOpacity: 0.5,
        stroke: am5.color(0x000000),
        strokeWidth: 0.5
      });

      var bullet = axisDataItem.set(
        "bullet",
        am5xy.AxisBullet.new(root, {
          sprite: clockHand
        })
      );

      xAxis.createAxisRange(axisDataItem);

      var label = chart.radarContainer.children.push(
        am5.Label.new(root, {
          centerX: am5.percent(50),
          textAlign: "center",
          centerY: am5.percent(50),
          fontSize: "1.5em"
        })
      );

      axisDataItem.set("value", 50);
      bullet.get("sprite").on("rotation", function () {
        var value = axisDataItem.get("value");
        label.set("text", Math.round(value).toString() + "%");
      });

      setInterval(function () {
        var value = Math.round(Math.random() * 100);

        axisDataItem.animate({
          key: "value",
          to: value,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });

        axisRange0.animate({
          key: "endValue",
          to: value,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });

        axisRange1.animate({
          key: "value",
          to: value,
          duration: 500,
          easing: am5.ease.out(am5.ease.cubic)
        });
      }, 2000);

      chart.bulletsContainer.set("mask", undefined);

      var colorSet = am5.ColorSet.new(root, {});

      var axisRange0 = xAxis.createAxisRange(
        xAxis.makeDataItem({
          above: true,
          value: 0,
          endValue: 50
        })
      );

      axisRange0.get("axisFill").setAll({
        visible: true,
        fill: colorSet.getIndex(0)
      });

      axisRange0.get("label").setAll({
        forceHidden: true
      });

      var axisRange1 = xAxis.createAxisRange(
        xAxis.makeDataItem({
          above: true,
          value: 50,
          endValue: 100
        })
      );

      axisRange1.get("axisFill").setAll({
        visible: true,
        fill: colorSet.getIndex(4)
      });

      axisRange1.get("label").setAll({
        forceHidden: true
      });


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

      // Make stuff animate on load
      chart.appear(1000, 100);

    });
    //==============================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv7");


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);


      // Create wrapper container
      var container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      }));


      // Create series
      // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
      var series = container.children.push(am5hierarchy.Sunburst.new(root, {
        singleBranchOnly: true,
        downDepth: 10,
        initialDepth: 10,
        valueField: "value",
        categoryField: "name",
        childDataField: "children"
      }));


      // Generate and set data
      // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
      var maxLevels = 2;
      var maxNodes = 3;
      var maxValue = 100;

      var data = {
        name: "Root",
        children: []
      }
      generateLevel(data, "", 0);

      series.data.setAll([data]);
      series.set("selectedDataItem", series.dataItems[0]);

      function generateLevel(data, name, level) {
        for (var i = 0; i < Math.ceil(maxNodes * Math.random()) + 1; i++) {
          var nodeName = name + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
          var child;
          if (level < maxLevels) {
            child = {
              name: nodeName + level
            }

            if (level > 0 && Math.random() < 0.5) {
              child.value = Math.round(Math.random() * maxValue);
            }
            else {
              child.children = [];
              generateLevel(child, nodeName + i, level + 1)
            }
          }
          else {
            child = {
              name: name + i,
              value: Math.round(Math.random() * maxValue)
            }
          }
          data.children.push(child);
        }

        level++;
        return data;
      }


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);


      // Make stuff animate on load
      series.appear(1000, 100);

    }); // end am5.ready()

    //=================================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv8");
      root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX", "openValueX"]
      });


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);


      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      }));



      //改變表格格線顏色
      root.interfaceColors.set("grid", am5.color(0xFFFFFF));

      // Add legend
      // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
      var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      }))

      var colors = chart.get("colors");

      // Data
      var data = [{
        category: "Module #1",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 14).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0)
        },
        task: "Gathering requirements"
      }, {
        category: "Module #1",
        start: new Date(2016, 0, 16).getTime(),
        end: new Date(2016, 0, 27).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0.4)
        },
        task: "Producing specifications"
      }, {
        category: "Module #1",
        start: new Date(2016, 1, 5).getTime(),
        end: new Date(2016, 3, 18).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 0.8)
        },
        task: "Development"
      }, {
        category: "Module #1",
        start: new Date(2016, 3, 18).getTime(),
        end: new Date(2016, 3, 30).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(0), 1.2)
        },
        task: "Testing and QA"
      }, {
        category: "Module #2",
        start: new Date(2016, 0, 8).getTime(),
        end: new Date(2016, 0, 10).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 0)
        },
        task: "Gathering requirements"
      }, {
        category: "Module #2",
        start: new Date(2016, 0, 12).getTime(),
        end: new Date(2016, 0, 15).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 0.4)
        },
        task: "Producing specifications"
      }, {
        category: "Module #2",
        start: new Date(2016, 0, 16).getTime(),
        end: new Date(2016, 1, 5).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 0.8)
        },
        task: "Development"
      }, {
        category: "Module #2",
        start: new Date(2016, 1, 10).getTime(),
        end: new Date(2016, 1, 18).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(2), 1.2)
        },
        task: "Testing and QA"
      }, {
        category: "Module #3",
        start: new Date(2016, 0, 2).getTime(),
        end: new Date(2016, 0, 8).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(4), 0)
        },
        task: "Gathering requirements"
      }, {
        category: "Module #3",
        start: new Date(2016, 0, 8).getTime(),
        end: new Date(2016, 0, 16).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(4), 0.4)
        },
        task: "Producing specifications"
      }, {
        category: "Module #3",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 2, 1).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(4), 0.8)
        },
        task: "Development"
      }, {
        category: "Module #3",
        start: new Date(2016, 2, 12).getTime(),
        end: new Date(2016, 3, 5).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(4), 1.2)
        },
        task: "Testing and QA"
      }, {
        category: "Module #4",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 19).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(6), 0)
        },
        task: "Gathering requirements"
      }, {
        category: "Module #4",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 1, 3).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(6), 0.4)
        },
        task: "Producing specifications"
      }, {
        category: "Module #4",
        start: new Date(2016, 2, 20).getTime(),
        end: new Date(2016, 3, 25).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(6), 0.8)
        },
        task: "Development"
      }, {
        category: "Module #4",
        start: new Date(2016, 3, 27).getTime(),
        end: new Date(2016, 4, 15).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(6), 1.2)
        },
        task: "Testing and QA"
      }, {
        category: "Module #5",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 12).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(8), 0)
        },
        task: "Gathering requirements"
      }, {
        category: "Module #5",
        start: new Date(2016, 0, 12).getTime(),
        end: new Date(2016, 0, 19).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(8), 0.4)
        },
        task: "Producing specifications"
      }, {
        category: "Module #5",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 2, 1).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(8), 0.8)
        },
        task: "Development"
      }, {
        category: "Module #5",
        start: new Date(2016, 2, 8).getTime(),
        end: new Date(2016, 2, 30).getTime(),
        columnSettings: {
          fill: am5.Color.brighten(colors.getIndex(8), 1.2)
        },
        task: "Testing and QA"
      }];


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "category",
          renderer: am5xy.AxisRendererY.new(root, {}),
          tooltip: am5.Tooltip.new(root, {})
        })
      );

      yAxis.data.setAll([
        { category: "Module #1" },
        { category: "Module #2" },
        { category: "Module #3" },
        { category: "Module #4" },
        { category: "Module #5" }
      ]);

      var xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "minute", count: 1 },
          renderer: am5xy.AxisRendererX.new(root, {})
        })
      );


      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        openValueXField: "start",
        valueXField: "end",
        categoryYField: "category",
        sequencedInterpolation: true
      }));

      series.columns.template.setAll({
        templateField: "columnSettings",
        strokeOpacity: 0,
        tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
      });

      series.data.setAll(data);

      // Add scrollbars
      chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
      chart.appear(1000, 100);


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);


    }); // end am5.ready()
    //===================================================================================================================================
    am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv9");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      }));

      // Add scrollbar
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));

      var data = [{
        "country": "USA",
        "year2004": 3.5,
        "year2005": 4.2
      }, {
        "country": "UK",
        "year2004": 1.7,
        "year2005": 3.1
      }, {
        "country": "Canada",
        "year2004": 2.8,
        "year2005": 2.9
      }, {
        "country": "Japan",
        "year2004": 2.6,
        "year2005": 2.3
      }, {
        "country": "France",
        "year2004": 1.4,
        "year2005": 2.1
      }, {
        "country": "Brazil",
        "year2004": 2.6,
        "year2005": 4.9
      }];

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "country",
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {
          themeTags: ["axis"],
          animationDuration: 200
        })
      }));

      xAxis.data.setAll(data);

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

      var series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "year2004",
        categoryXField: "country",
        clustered: false,
        tooltip: am5.Tooltip.new(root, {
          labelText: "2004: {valueY}"
        })
      }));

      series0.columns.template.setAll({
        width: am5.percent(80),
        tooltipY: 0
      });


      series0.data.setAll(data);


      var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Income",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "year2005",
        categoryXField: "country",
        clustered: false,
        tooltip: am5.Tooltip.new(root, {
          labelText: "2005: {valueY}"
        })
      }));

      series1.columns.template.setAll({
        width: am5.percent(50),
        tooltipY: 0
      });

      series1.data.setAll(data);

      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      chart.appear(1000, 100);
      series0.appear();
      series1.appear();


      var myTheme = am5.Theme.new(root);
      myTheme.rule("Label").setAll({
        fill: am5.color(0xFFFFFF),
        fontSize: "1em"
      });

      root.setThemes([
        am5themes_Animated.new(root),
        myTheme
      ]);

    }); // end am5.ready()