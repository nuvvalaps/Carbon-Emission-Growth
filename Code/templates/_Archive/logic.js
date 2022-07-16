// dateSlider.noUiSlider.on('change', function (values, handle) {
//   datebuilder(values[handle]);
// })

function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the streetmap layer.
  var baseMaps = {
    "Carbon Emission Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Emission Sector Details": bikeStations
  };

  // Create the map object with options.
  var map = L.map("map-id", {
    center: [0, 0],
    zoom: 2,
    layers: [streetmap, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

  console.log("Log")
}




function createPopulationMarkers(response) {

  // Pull the "stations" property from response.data.
  var pop = response.Country;

  // // Initialize an array to hold bike markers.
  var markers = [];



  // Loop through the stations array.
  for (var index = 0; index < 210; index++) {
    var station = pop[index];
    

    // For each station, create a marker, and bind a popup with the station's name.
    var pin = L.marker([response.Lat[index], response.Long[index]])
      .bindPopup("<h3>" + station + "<h5><h5>Solid: " + station + "<h5><h5>Solid: " + station + "<h5><h5>Solid: " + station + "");

    // Add the marker to the bikeMarkers array.
    markers.push(pin);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(markers));

}

// d3.json("../../Resources/JSON/Population.json").then(createMap);
d3.json("../../Resources/JSON/Total_Emission.json").then(createPopulationMarkers);
console.log("Log")


var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

