/**
 * Name: Amya Moore
 * Course Name: ICT 4515: Advanced Web Design and Management
 * Description: The following JS code uses the Leaflet JS API
 * to render the following coordinates (39.678121, -104.961753)
 * in a map-view container. A visual marker is placed at the
 * same coordinates with the business name, address, and open hours.
 *
 * URL: https://leafletjs.com/examples/quick-start/
 */

const map = L.map("map").setView([39.678121, -104.961753], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([39.678121, -104.961753]).addTo(map);

marker
	.bindPopup(
		"<p>SubSational Subs<br /><small>2150 E Evans Ave, Denver, CO 80210</small><br /><small>Monday-Friday: 10:00 AM to 9:30 PM<br />Saturday-Sunday: 12:00 PM - 9:30 PM</small></p>"
	)
	.openPopup();
