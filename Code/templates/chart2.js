/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv2");
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
  "CG": { "name": "Congo", "continent": "AF" },
  "CD": { "name": "Congo, Democratic Republic of the Congo", "continent": "AF" },
  "CK": { "name": "Cook Islands", "continent": "OC" },
  "CR": { "name": "Costa Rica", "continent": "NA" },
  "CI": { "name": "Cote D'Ivoire", "continent": "AF" },
  "HR": { "name": "Croatia", "continent": "EU" },
  "CU": { "name": "Cuba", "continent": "NA" },
  "CW": { "name": "Curacao", "continent": "NA" },
  "CY": { "name": "Cyprus", "continent": "AS" },
  "CZ": { "name": "Czech Republic", "continent": "EU" },
  "DK": { "name": "Denmark", "continent": "EU" },
  "DJ": { "name": "Djibouti", "continent": "AF" },
  "DM": { "name": "Dominica", "continent": "NA" },
  "DO": { "name": "Dominican Republic", "continent": "NA" },
  "EC": { "name": "Ecuador", "continent": "SA" },
  "EG": { "name": "Egypt", "continent": "AF" },
  "SV": { "name": "El Salvador", "continent": "NA" },
  "GQ": { "name": "Equatorial Guinea", "continent": "AF" },
  "ER": { "name": "Eritrea", "continent": "AF" },
  "EE": { "name": "Estonia", "continent": "EU" },
  "ET": { "name": "Ethiopia", "continent": "AF" },
  "FK": { "name": "Falkland Islands (Malvinas)", "continent": "SA" },
  "FO": { "name": "Faroe Islands", "continent": "EU" },
  "FJ": { "name": "Fiji", "continent": "OC" },
  "FI": { "name": "Finland", "continent": "EU" },
  "FR": { "name": "France", "continent": "EU" },
  "GF": { "name": "French Guiana", "continent": "SA" },
  "PF": { "name": "French Polynesia", "continent": "OC" },
  "TF": { "name": "French Southern Territories", "continent": "AN" },
  "GA": { "name": "Gabon", "continent": "AF" },
  "GM": { "name": "Gambia", "continent": "AF" },
  "GE": { "name": "Georgia", "continent": "AS" },
  "DE": { "name": "Germany", "continent": "EU" },
  "GH": { "name": "Ghana", "continent": "AF" },
  "GI": { "name": "Gibraltar", "continent": "EU" },
  "GR": { "name": "Greece", "continent": "EU" },
  "GL": { "name": "Greenland", "continent": "NA" },
  "GD": { "name": "Grenada", "continent": "NA" },
  "GP": { "name": "Guadeloupe", "continent": "NA" },
  "GU": { "name": "Guam", "continent": "OC" },
  "GT": { "name": "Guatemala", "continent": "NA" },
  "GG": { "name": "Guernsey", "continent": "EU" },
  "GN": { "name": "Guinea", "continent": "AF" },
  "GW": { "name": "Guinea-Bissau", "continent": "AF" },
  "GY": { "name": "Guyana", "continent": "SA" },
  "HT": { "name": "Haiti", "continent": "NA" },
  "HM": { "name": "Heard Island and Mcdonald Islands", "continent": "AN" },
  "VA": { "name": "Holy See (Vatican City State)", "continent": "EU" },
  "HN": { "name": "Honduras", "continent": "NA" },
  "HK": { "name": "Hong Kong", "continent": "AS" },
  "HU": { "name": "Hungary", "continent": "EU" },
  "IS": { "name": "Iceland", "continent": "EU" },
  "IN": { "name": "India", "continent": "AS" },
  "ID": { "name": "Indonesia", "continent": "AS" },
  "IR": { "name": "Iran, Islamic Republic of", "continent": "AS" },
  "IQ": { "name": "Iraq", "continent": "AS" },
  "IE": { "name": "Ireland", "continent": "EU" },
  "IM": { "name": "Isle of Man", "continent": "EU" },
  "IL": { "name": "Israel", "continent": "AS" },
  "IT": { "name": "Italy", "continent": "EU" },
  "JM": { "name": "Jamaica", "continent": "NA" },
  "JP": { "name": "Japan", "continent": "AS" },
  "JE": { "name": "Jersey", "continent": "EU" },
  "JO": { "name": "Jordan", "continent": "AS" },
  "KZ": { "name": "Kazakhstan", "continent": "AS" },
  "KE": { "name": "Kenya", "continent": "AF" },
  "KI": { "name": "Kiribati", "continent": "OC" },
  "KP": { "name": "Korea, Democratic People's Republic of", "continent": "AS" },
  "KR": { "name": "Korea, Republic of", "continent": "AS" },
  "XK": { "name": "Kosovo", "continent": "EU" },
  "KW": { "name": "Kuwait", "continent": "AS" },
  "KG": { "name": "Kyrgyzstan", "continent": "AS" },
  "LA": { "name": "Lao People's Democratic Republic", "continent": "AS" },
  "LV": { "name": "Latvia", "continent": "EU" },
  "LB": { "name": "Lebanon", "continent": "AS" },
  "LS": { "name": "Lesotho", "continent": "AF" },
  "LR": { "name": "Liberia", "continent": "AF" },
  "LY": { "name": "Libyan Arab Jamahiriya", "continent": "AF" },
  "LI": { "name": "Liechtenstein", "continent": "EU" },
  "LT": { "name": "Lithuania", "continent": "EU" },
  "LU": { "name": "Luxembourg", "continent": "EU" },
  "MO": { "name": "Macao", "continent": "AS" },
  "MK": { "name": "Macedonia, the Former Yugoslav Republic of", "continent": "EU" },
  "MG": { "name": "Madagascar", "continent": "AF" },
  "MW": { "name": "Malawi", "continent": "AF" },
  "MY": { "name": "Malaysia", "continent": "AS" },
  "MV": { "name": "Maldives", "continent": "AS" },
  "ML": { "name": "Mali", "continent": "AF" },
  "MT": { "name": "Malta", "continent": "EU" },
  "MH": { "name": "Marshall Islands", "continent": "OC" },
  "MQ": { "name": "Martinique", "continent": "NA" },
  "MR": { "name": "Mauritania", "continent": "AF" },
  "MU": { "name": "Mauritius", "continent": "AF" },
  "YT": { "name": "Mayotte", "continent": "AF" },
  "MX": { "name": "Mexico", "continent": "NA" },
  "FM": { "name": "Micronesia, Federated States of", "continent": "OC" },
  "MD": { "name": "Moldova, Republic of", "continent": "EU" },
  "MC": { "name": "Monaco", "continent": "EU" },
  "MN": { "name": "Mongolia", "continent": "AS" },
  "ME": { "name": "Montenegro", "continent": "EU" },
  "MS": { "name": "Montserrat", "continent": "NA" },
  "MA": { "name": "Morocco", "continent": "AF" },
  "MZ": { "name": "Mozambique", "continent": "AF" },
  "MM": { "name": "Myanmar", "continent": "AS" },
  "NA": { "name": "Namibia", "continent": "AF" },
  "NR": { "name": "Nauru", "continent": "OC" },
  "NP": { "name": "Nepal", "continent": "AS" },
  "NL": { "name": "Netherlands", "continent": "EU" },
  "AN": { "name": "Netherlands Antilles", "continent": "NA" },
  "NC": { "name": "New Caledonia", "continent": "OC" },
  "NZ": { "name": "New Zealand", "continent": "OC" },
  "NI": { "name": "Nicaragua", "continent": "NA" },
  "NE": { "name": "Niger", "continent": "AF" },
  "NG": { "name": "Nigeria", "continent": "AF" },
  "NU": { "name": "Niue", "continent": "OC" },
  "NF": { "name": "Norfolk Island", "continent": "OC" },
  "MP": { "name": "Northern Mariana Islands", "continent": "OC" },
  "NO": { "name": "Norway", "continent": "EU" },
  "OM": { "name": "Oman", "continent": "AS" },
  "PK": { "name": "Pakistan", "continent": "AS" },
  "PW": { "name": "Palau", "continent": "OC" },
  "PS": { "name": "Palestinian Territory, Occupied", "continent": "AS" },
  "PA": { "name": "Panama", "continent": "NA" },
  "PG": { "name": "Papua New Guinea", "continent": "OC" },
  "PY": { "name": "Paraguay", "continent": "SA" },
  "PE": { "name": "Peru", "continent": "SA" },
  "PH": { "name": "Philippines", "continent": "AS" },
  "PN": { "name": "Pitcairn", "continent": "OC" },
  "PL": { "name": "Poland", "continent": "EU" },
  "PT": { "name": "Portugal", "continent": "EU" },
  "PR": { "name": "Puerto Rico", "continent": "NA" },
  "QA": { "name": "Qatar", "continent": "AS" },
  "RE": { "name": "Reunion", "continent": "AF" },
  "RO": { "name": "Romania", "continent": "EU" },
  "RU": { "name": "Russian Federation", "continent": "AS" },
  "RW": { "name": "Rwanda", "continent": "AF" },
  "BL": { "name": "Saint Barthelemy", "continent": "NA" },
  "SH": { "name": "Saint Helena", "continent": "AF" },
  "KN": { "name": "Saint Kitts and Nevis", "continent": "NA" },
  "LC": { "name": "Saint Lucia", "continent": "NA" },
  "MF": { "name": "Saint Martin", "continent": "NA" },
  "PM": { "name": "Saint Pierre and Miquelon", "continent": "NA" },
  "VC": { "name": "Saint Vincent and the Grenadines", "continent": "NA" },
  "WS": { "name": "Samoa", "continent": "OC" },
  "SM": { "name": "San Marino", "continent": "EU" },
  "ST": { "name": "Sao Tome and Principe", "continent": "AF" },
  "SA": { "name": "Saudi Arabia", "continent": "AS" },
  "SN": { "name": "Senegal", "continent": "AF" },
  "RS": { "name": "Serbia", "continent": "EU" },
  "CS": { "name": "Serbia and Montenegro", "continent": "EU" },
  "SC": { "name": "Seychelles", "continent": "AF" },
  "SL": { "name": "Sierra Leone", "continent": "AF" },
  "SG": { "name": "Singapore", "continent": "AS" },
  "SX": { "name": "Sint Maarten", "continent": "NA" },
  "SK": { "name": "Slovakia", "continent": "EU" },
  "SI": { "name": "Slovenia", "continent": "EU" },
  "SB": { "name": "Solomon Islands", "continent": "OC" },
  "SO": { "name": "Somalia", "continent": "AF" },
  "ZA": { "name": "South Africa", "continent": "AF" },
  "GS": { "name": "South Georgia and the South Sandwich Islands", "continent": "AN" },
  "SS": { "name": "South Sudan", "continent": "AF" },
  "ES": { "name": "Spain", "continent": "EU" },
  "LK": { "name": "Sri Lanka", "continent": "AS" },
  "SD": { "name": "Sudan", "continent": "AF" },
  "SR": { "name": "Suriname", "continent": "SA" },
  "SJ": { "name": "Svalbard and Jan Mayen", "continent": "EU" },
  "SZ": { "name": "Swaziland", "continent": "AF" },
  "SE": { "name": "Sweden", "continent": "EU" },
  "CH": { "name": "Switzerland", "continent": "EU" },
  "SY": { "name": "Syrian Arab Republic", "continent": "AS" },
  "TW": { "name": "Taiwan, Province of China", "continent": "AS" },
  "TJ": { "name": "Tajikistan", "continent": "AS" },
  "TZ": { "name": "Tanzania, United Republic of", "continent": "AF" },
  "TH": { "name": "Thailand", "continent": "AS" },
  "TL": { "name": "Timor-Leste", "continent": "AS" },
  "TG": { "name": "Togo", "continent": "AF" },
  "TK": { "name": "Tokelau", "continent": "OC" },
  "TO": { "name": "Tonga", "continent": "OC" },
  "TT": { "name": "Trinidad and Tobago", "continent": "NA" },
  "TN": { "name": "Tunisia", "continent": "AF" },
  "TR": { "name": "Turkey", "continent": "AS" },
  "TM": { "name": "Turkmenistan", "continent": "AS" },
  "TC": { "name": "Turks and Caicos Islands", "continent": "NA" },
  "TV": { "name": "Tuvalu", "continent": "OC" },
  "UG": { "name": "Uganda", "continent": "AF" },
  "UA": { "name": "Ukraine", "continent": "EU" },
  "AE": { "name": "United Arab Emirates", "continent": "AS" },
  "GB": { "name": "United Kingdom", "continent": "EU" },
  "US": { "name": "United States", "continent": "NA" },
  "UM": { "name": "United States Minor Outlying Islands", "continent": "NA" },
  "UY": { "name": "Uruguay", "continent": "SA" },
  "UZ": { "name": "Uzbekistan", "continent": "AS" },
  "VU": { "name": "Vanuatu", "continent": "OC" },
  "VE": { "name": "Venezuela", "continent": "SA" },
  "VN": { "name": "Viet Nam", "continent": "AS" },
  "VG": { "name": "Virgin Islands, British", "continent": "NA" },
  "VI": { "name": "Virgin Islands, U.s.", "continent": "NA" },
  "WF": { "name": "Wallis and Futuna", "continent": "OC" },
  "EH": { "name": "Western Sahara", "continent": "AF" },
  "YE": { "name": "Yemen", "continent": "AS" },
  "ZM": { "name": "Zambia", "continent": "AF" },
  "ZW": { "name": "Zimbabwe", "continent": "AF" }
};




var yearData = {};
var firstYear = 1959;
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

// main container
var mainContainer = root.container.children.push(am5.Container.new(root, {
  width: am5.p100,
  height: am5.p100,
  layout: root.verticalLayout
}))

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = mainContainer.children.push(am5xy.XYChart.new(root, {
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
var yearSliderContainer = mainContainer.children.push(am5.Container.new(root, {
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