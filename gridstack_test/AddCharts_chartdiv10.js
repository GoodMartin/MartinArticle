 //=====================================================================================================================================
 am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv10");
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var continents = {
      "AF": "Africa",
      "AS": "Asia",
      "EU": "Europe",
      "NA": "North America",
      "SA": "South America",
      "OC": "Oceania",
      "AN": "Antarctica"
    }
    
    var colorSet = am5.ColorSet.new(root, { step: 2 });
    
    var colors = {
      EU: colorSet.getIndex(0),
      NA: colorSet.getIndex(2),
      SA: colorSet.getIndex(4),
      AS: colorSet.getIndex(6),
      AF: colorSet.getIndex(8),
      OC: colorSet.getIndex(10),
    }
    
    var countries = {
      "AF": { "name": "Afghanistan", "continent": "AS" },
      "AX": { "name": "Aland Islands", "continent": "EU" },
      "AL": { "name": "Albania", "continent": "EU" },
      "DZ": { "name": "Algeria", "continent": "AF" },
      "AS": { "name": "American Samoa", "continent": "OC" },
      "AD": { "name": "Andorra", "continent": "EU" },
      "AO": { "name": "Angola", "continent": "AF" },
      "AI": { "name": "Anguilla", "continent": "NA" },
      "AQ": { "name": "Antarctica", "continent": "AN" },
      "AG": { "name": "Antigua and Barbuda", "continent": "NA" },
      "AR": { "name": "Argentina", "continent": "SA" },
      "AM": { "name": "Armenia", "continent": "AS" },
      "AW": { "name": "Aruba", "continent": "NA" },
      "AU": { "name": "Australia", "continent": "OC" },
      "AT": { "name": "Austria", "continent": "EU" },
      "AZ": { "name": "Azerbaijan", "continent": "AS" },
      "BS": { "name": "Bahamas", "continent": "NA" },
      "BH": { "name": "Bahrain", "continent": "AS" },
      "BD": { "name": "Bangladesh", "continent": "AS" },
      "BB": { "name": "Barbados", "continent": "NA" },
      "BY": { "name": "Belarus", "continent": "EU" },
      "BE": { "name": "Belgium", "continent": "EU" },
      "BZ": { "name": "Belize", "continent": "NA" },
      "BJ": { "name": "Benin", "continent": "AF" },
      "BM": { "name": "Bermuda", "continent": "NA" },
      "BT": { "name": "Bhutan", "continent": "AS" },
      "BO": { "name": "Bolivia", "continent": "SA" },
      "BQ": { "name": "Bonaire, Sint Eustatius and Saba", "continent": "NA" },
      "BA": { "name": "Bosnia and Herzegovina", "continent": "EU" },
      "BW": { "name": "Botswana", "continent": "AF" },
      "BV": { "name": "Bouvet Island", "continent": "AN" },
      "BR": { "name": "Brazil", "continent": "SA" },
      "IO": { "name": "British Indian Ocean Territory", "continent": "AS" },
      "BN": { "name": "Brunei Darussalam", "continent": "AS" },
      "BG": { "name": "Bulgaria", "continent": "EU" },
      "BF": { "name": "Burkina Faso", "continent": "AF" },
      "BI": { "name": "Burundi", "continent": "AF" },
      "KH": { "name": "Cambodia", "continent": "AS" },
      "CM": { "name": "Cameroon", "continent": "AF" },
      "CA": { "name": "Canada", "continent": "NA" },
      "CV": { "name": "Cape Verde", "continent": "AF" },
      "KY": { "name": "Cayman Islands", "continent": "NA" },
      "CF": { "name": "Central African Republic", "continent": "AF" },
      "TD": { "name": "Chad", "continent": "AF" },
      "CL": { "name": "Chile", "continent": "SA" },
      "CN": { "name": "China", "continent": "AS" },
      "CX": { "name": "Christmas Island", "continent": "AS" },
      "CC": { "name": "Cocos (Keeling) Islands", "continent": "AS" },
      "CO": { "name": "Colombia", "continent": "SA" },
      "KM": { "name": "Comoros", "continent": "AF" },
      "CG": { "name": "Congo", "continent": "AF" }
    };
    
    
    
    
    var yearData = {};
    var firstYear = 1900;
    var lastYear = 2022;
    var currentYear = firstYear;
    
    for (var year = firstYear; year <= lastYear; year++) {
      var data = [];
      yearData[year] = data;
    
      var i = 0;
      am5.object.each(countries, function(id, country) {
        if (year == firstYear) {
          var dObj = {
            id: id,
            name: country.name,
            continent: country.continent,
            settings: { fill: colors[country.continent] },
            x: Math.random() * 100 * Math.random() * 2 + 1 + i * 2,
            y: Math.random() * 40 * Math.random() + 1 + i / 10,
            value: Math.round(Math.random() * 500) + Math.random() * 500
          }
    
          data.push(dObj);
    
          country.data = [dObj];
    
        } else {
          var previous = yearData[year - 1][i];
          var dObj = {
            id: id,
            name: country.name,
            continent: country.continent,
            settings: { fill: colors[country.continent] },
            x: previous.x + (Math.random() * 10 - 3),
            y: previous.y + (Math.random() * 2 - 0.6),
            value: Math.abs(previous.value + (Math.random() * 100 - 40))
          }
          data.push(dObj);
          country.data.push(dObj);
        }
        i++;
      })
    }
    
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomXY",
      pinchZoomX:true,
      pinchZoomY:true
    }));
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 1000,
      renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.children.push(am5.Label.new(root, { text: "Hypothetical metric X", x: am5.p50, centerX: am5.p50 }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 120,
      renderer: am5xy.AxisRendererY.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    yAxis.children.moveValue(am5.Label.new(root, { text: "Hypothetical metric Y", rotation: -90, y: am5.p50, centerX: am5.p50 }), 0);
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var bubbleSeries = chart.series.push(am5xy.LineSeries.new(root, {
      calculateAggregates: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "y",
      valueXField: "x",
      valueField: "value"
    }));
    
    bubbleSeries.strokes.template.set("visible", false);
    
    // Add bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    var circleTemplate = am5.Template.new({ tooltipY: 0 });
    circleTemplate.states.create("transparent", { opacity: 0.15 });
    
    circleTemplate.events.on("pointerover", handleOver);
    circleTemplate.events.on("pointerout", handleOut);
    circleTemplate.events.on("click", handleClick);
    
    function handleOver(e) {
      var target = e.target;
      am5.array.each(bubbleSeries.dataItems, function(dataItem) {
        if (dataItem.bullets) {
          var bullet = dataItem.bullets[0];
          if (bullet) {
            var sprite = bullet.get("sprite");
            if (sprite && sprite != target) {
              sprite.states.applyAnimate("transparent");
            }
          }
        }
      })
    }
    
    function handleOut(e) {
      am5.array.each(bubbleSeries.dataItems, function(dataItem) {
        if (dataItem.bullets) {
          var bullet = dataItem.bullets[0];
          if (bullet) {
            var sprite = bullet.get("sprite");
            if (sprite) {
              sprite.states.applyAnimate("default");
            }
          }
        }
      })
    }
    
    var selectedDataItem;
    function handleClick(e) {
      if (selectedDataItem == e.target.dataItem) {
        am5.array.each(bubbleSeries.dataItems, function(dataItem) {
          var bullet = dataItem.bullets[0];
          var sprite = bullet.get("sprite");
          sprite.set("fillOpacity", 1);
        })
        lineSeries.data.clear();
      }
      else {
        selectedDataItem = e.target.dataItem;
    
        lineSeries.data.setAll(countries[selectedDataItem.dataContext.id].data);
        lineSeries.show();
    
        am5.array.each(bubbleSeries.dataItems, function(dataItem) {
          var bullet = dataItem.bullets[0];
          var sprite = bullet.get("sprite");
          if (dataItem != selectedDataItem) {
            sprite.set("fillOpacity", 0.15);
          }
          else {
            sprite.set("fillOpacity", 1);
          }
        })
      }
    }
    
    
    bubbleSeries.bullets.push(function() {
      var bulletCircle = am5.Circle.new(root, {
        radius: 5,
        templateField: "settings",
        fillOpacity: 0.9,
        tooltipText: "[fontSize:18px; bold]{name}[/]\nMetric Y: {valueY}\nMetric X: {valueX}$\nMetric bubble: {value}"
      }, circleTemplate);
      return am5.Bullet.new(root, {
        sprite: bulletCircle
      });
    });
    
    // Add heat rule
    // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
    bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 35,
      dataField: "value",
      key: "radius", maxValue: 4000
    }]);
    
    // line series
    var lineSeries = chart.series.push(am5xy.LineSeries.new(root, {
      valueXField: "x",
      valueYField: "y",
      xAxis: xAxis,
      yAxis: yAxis,
      stroke: am5.color(0x00000)
    
    }))
    
    lineSeries.strokes.template.set("strokeOpacity", 0.3);
    
    lineSeries.bullets.push(function() {
      var bulletCircle = am5.Circle.new(root, {
        radius: 2,
        fill: lineSeries.stroke
    
      });
      return am5.Bullet.new(root, {
        sprite: bulletCircle
      });
    });
    
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [bubbleSeries]
    }));
    
    // Add scrollbars
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal",
      exportable:false
    }));
    
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical",
      exportable:false
    }));
    
    // Label
    var yearLabel = chart.plotContainer.children.push(am5.Label.new(root, {
      text: currentYear.toString(),
      fontSize: "10em",
      fill: am5.color(0x000000),
      opacity: 0.15,
      x: am5.p50,
      y: am5.p50,
      fontFamily: "Courier New",
      textAlign: "right",
      centerY: am5.p50,
      centerX: am5.p50
    }));
    
    // Create controls
    var yearSliderContainer = root.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      layout: root.horizontalLayout,
      paddingLeft: 70,
      paddingRight: 40,
      exportable:false
    }));
    
    var playButton = yearSliderContainer.children.push(am5.Button.new(root, {
      themeTags: ["play"],
      centerY: am5.p50,
      marginRight: 20,
      icon: am5.Graphics.new(root, {
        themeTags: ["icon"]
      })
    }));
    
    playButton.events.on("click", function() {
      if (playButton.get("active")) {
        slider.set("start", slider.get("start") + 0.0001);
      } else {
        slider.animate({
          key: "start",
          to: 1,
          duration: 15000 * (1 - slider.get("start"))
        });
      }
    });
    
    var slider = yearSliderContainer.children.push(am5.Slider.new(root, {
      orientation: "horizontal",
      start: 0,
      centerY: am5.p50
    }));
    
    slider.on("start", function(start) {
      if (start === 1) {
        playButton.set("active", false);
      }
    });
    
    slider.events.on("rangechanged", function() {
      updateSeriesData(
        firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear))
      );
    });
    
    
    
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var navMap = chart.plotContainer.children.push(am5map.MapChart.new(root, {
      projection: am5map.geoNaturalEarth1(),
      rotationX: -11,
      width: 250,
      height: 150,
      x: am5.percent(100),
      y: am5.percent(100),
      centerY: am5.percent(100),
      centerX: am5.percent(100),
      panY: "none",
      panX: "none"
    }));
    
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = navMap.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_continentsLow,
      exclude: ["antarctica"]
    }));
    
    
    var polygonTemplate = polygonSeries.mapPolygons.template;
    
    polygonTemplate.setAll({
      templateField: "settings",
      tooltipText: "{name}",
      interactive: true
    });
    
    polygonTemplate.states.create("disabled", {
      fill: root.interfaceColors.get("disabled")
    });
    
    
    polygonTemplate.events.on("pointerover", handleContinentOver);
    polygonTemplate.events.on("click", handleContinentClick);
    polygonTemplate.events.on("pointerout", handleOut);
    
    function handleContinentOver(e) {
      var target = e.target;
      am5.array.each(bubbleSeries.dataItems, function(dataItem) {
        if (dataItem.bullets) {
          var bullet = dataItem.bullets[0];
          if (bullet) {
            var sprite = bullet.get("sprite");
            if (sprite) {
              if (target.dataItem.dataContext.code == sprite.dataItem.dataContext.continent) {
                sprite.states.applyAnimate("default");
              }
              else {
                sprite.states.applyAnimate("transparent");
              }
            }
          }
        }
      })
    }
    
    var selectedContinent;
    
    function handleContinentClick(e) {
      var target = e.target;
      if (target.dataItem == selectedContinent) {
        selectedContinent = undefined;
    
    
        am5.array.each(polygonSeries.dataItems, function(dataItem) {
          var mapPolygon = dataItem.get("mapPolygon");
          mapPolygon.states.applyAnimate("default");
        })
    
        am5.array.each(bubbleSeries.dataItems, function(dataItem) {
          var bullet = dataItem.bullets[0];
          if (bullet) {
            var sprite = bullet.get("sprite");
            if (sprite) {
              sprite.set("forceHidden", false);
            }
          }
        })
      }
      else {
        selectedContinent = target.dataItem;
    
        am5.array.each(polygonSeries.dataItems, function(dataItem) {
          var mapPolygon = dataItem.get("mapPolygon");
          if (dataItem != selectedContinent) {
            mapPolygon.states.applyAnimate("disabled");
          }
          else {
            mapPolygon.states.applyAnimate("default");
          }
        })
    
        am5.array.each(bubbleSeries.dataItems, function(dataItem) {
          if (dataItem.bullets) {
            var bullet = dataItem.bullets[0];
            var sprite = bullet.get("sprite");
            if (target.dataItem.dataContext.code == sprite.dataItem.dataContext.continent) {
              sprite.set("forceHidden", false);
            }
            else {
              sprite.set("forceHidden", true);
            }
          }
        })
      }
    }
    
    
    polygonSeries.data.setAll([
      { id: "europe", code: "EU", settings: { fill: colors.EU } },
      { id: "northAmerica", code: "NA", settings: { fill: colors.NA } },
      { id: "southAmerica", code: "SA", settings: { fill: colors.SA } },
      { id: "asia", code: "AS", settings: { fill: colors.AS } },
      { id: "africa", code: "AF", settings: { fill: colors.AF } },
      { id: "oceania", code: "OC", settings: { fill: colors.OC } }
    ])
    
    
    function updateSeriesData(year) {
      if (currentYear != year) {
        currentYear = year;
        var data = yearData[year];
    
        var i = 0;
        am5.array.each(data, function(item) {
          bubbleSeries.data.setIndex(i, item);
          i++;
        });
    
        yearLabel.set("text", year.toString());
      }
    }
    
    bubbleSeries.data.setAll(yearData[currentYear]);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    bubbleSeries.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()