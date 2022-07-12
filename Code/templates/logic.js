function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  // Create a baseMaps object to hold the streetmap layer.
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options.
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [streetmap, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

  console.log("Log")
}


// function createMap(population_markers) {


  

//   // Adding the tile layer
//   var map = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);

//     var myMap = L.map("map", {
//     center: [00, 00],
//     zoom: 3,
//     layers: [map, population_markers]

//   });

//     // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);
// }


function createPopulationMarkers(response) {

  // Pull the "stations" property from response.data.
  var pop = response.Country;

  // // Initialize an array to hold bike markers.
  var markers = [];

  // var station = pop[57];
  // L.marker([station.lat, station.long]).bindPopup("<h3>" + station.Country + "<h3><h3>Capacity: " + station,1990 + "</h3>");
  // markers.push(marker);
  // createMap(L.layerGroup(markers));

  // Loop through the stations array.
  for (var index = 0; index < 210; index++) {
    var station = pop[index];

    // For each station, create a marker, and bind a popup with the station's name.
    var pin = L.marker([response.Lat[index], response.Long[index]]).bindPopup("<h3>" + station.Country + "</h3>");

    // Add the marker to the bikeMarkers array.
    markers.push(pin);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(markers));
  }



// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("../../Resources/JSON/Population.json").then(createPopulationMarkers);
