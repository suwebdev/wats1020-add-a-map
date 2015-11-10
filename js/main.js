// Add your on ready handler.
$(document).ready(function() {
	// Invoke the Leaflet.js library to draw a map in your `#map-container` div.
	var map = L.map('map-container').setView([46.852, -121.760], 11);
	
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
	
	// Add 2 layers to your map you have visuals. Use the Open Street Maps tiles served through the MapQuest CDN. 
	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	});

	var mapLayers = {
  		"Satellite": satLayer,
   		"Map View": drawLayer,
   		"Open Street Maps": osm
}

	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	// Customize markers with popups at no fewer than 3 locations.
	var marker = L.marker([46.852, -121.760]).addTo(map);
	marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>A large active stratovolcano and the highest mountain in the state of Washington.");
	
	var markerTwo = L.marker([46.852895, -121.760373]).addTo(map);
	markerTwo.bindPopup("<b>Columbia Crest, Mt Rainier's highest peak!</b><br>This peak is 14,411 feet high.");
	
	var markerThree = L.marker([46.852319, -121.760326]).addTo(map);
	markerThree.bindPopup("<b>Point Success Peak!</b><br>This peak is 14,158 feet high.");
	
	var markerFour = L.marker([46.852317, -121.760323]).addTo(map);
	markerFour.bindPopup("<b>Liberty Cap Peak!</b><br>This peak is 14,112 feet high.");
	
	var markerFive = L.marker([46.849562, -121.712320]).addTo(map);
	markerFive.bindPopup("<b>Little Tahoma Peak, an eroded remnant of the earlier, higher Mount Rainier!</b><br>This peak is 11,138 feet high.");
	
	
	var circle = L.circle([46.852095, -121.757652], 200, {
    color: 'red',
    fillOpacity: 0.1
	}).addTo(map);
	circle.bindPopup("East Crater");
	
	var circle = L.circle([46.852219, -121.761794], 150, {
    color: 'blue',
    fillOpacity: 0.01
	}).addTo(map);
	circle.bindPopup("West Crater");

});