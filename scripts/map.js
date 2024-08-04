/**
 * Name: Amya Moore
 * Course Name: ICT 4515: Advanced Web Design and Management
 * Description: The following uses the Leaflest JS API to 
 * render the following coordinates in a map-view container: 39.678121, -104.961753.
 * A visual marker is also placed at that came coordinates.
 * 
 * URL: https://leafletjs.com/examples/quick-start/
 */

// =================== leaflet.js ===================
var map = L.map("map").setView([39.678121, -104.961753], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([39.678121, -104.961753]).addTo(map);

marker
	.bindPopup(
		"<b>SubSational Subs!</b><br /><small>2150 E Evans Ave,<br />Denver, CO 80208</small><br /><small>Monday - Friday<br />10:00 AM to 9:30 PM</small>"
	)
	.openPopup();