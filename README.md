# Advanced Web Design and Development - Class Portfolio Project

## Assignment Requirements

### Home Page

- Done: ~The home page implements a carousel or Jumbotron image.~

### About Page - located on the Home Page

- Done: ~The about page must contain the restaurant's contact information, including the address and hours of operation.~
- Done: ~Use the Leaflet.js library to display a map-view of the restaurant's coordinates.~

### Login Form

- Must contain a Login form containing the following fields: username and password.
  - The form makes an Ajax POST request to "https://ict4510.herokuapp.com/api/login".
  - A successful 200 HTTP response should be returned with the user object containing your username, first_name, last_name, api_key, and session token.
  - This object is saved in sessionStorage and the user is directed towards the main page.
- Upon log out, the user object is removed from sessionStorage and the user is directed back to the login form.

### Food Menu Page

- A display of your menu items.
- The menu/ordering page is only rendered after a user has been successfully logged in.
- Each menu item must container the item name, its description and price.
- The Ordering form will make an Ajax POST request to "https://ict4510.herokuapp.com/api/menus?api_key=<your-api-key>".
	- The request must container the session token in the request header.
	- A successful 200 (or 201?) request should be returned.

### Footer

- Add the following to the footer: 'University of Denver IT 4510 Portfolio Assignment'

### Other Requirements

- The project must be fully debugged (no errors), with all implemented features functional.
- HTML and CSS must render correctly in Firefox, Chrome, and Safari web browsers.
- Project assets, CSS, and JavaScript files must be organised in folders.
- Compressed project folder must contain your first initial and last name.
- Each created JS file must contain a comment block containing your full name, course name, current quarter, and a brief description about the file.

## Assignment Assets

All photos were taken from pexels.

Asset references:

- Photo by Karolina Kaboompics: https://www.pexels.com/photo/muffin-with-miniature-us-flag-and-coke-bottle-placed-on-white-table-4389641/
- Photo by Polina Tankilevitch: https://www.pexels.com/photo/person-holding-bread-with-cheese-5419221/
- Photo by Geraud pfeiffer: https://www.pexels.com/photo/crop-person-with-sub-sandwich-6608664/
- Photo by Alex Green: https://www.pexels.com/photo/little-girl-eating-huge-delicious-sandwich-5693056/
- Video by Ron Lach from Pexels: https://www.pexels.com/video/cheesy-burger-sandwich-in-close-up-view-8879530/
- Photo by Victoria Aleksandrova: https://unsplash.com/photos/ham-sandwich-on-white-plate-kwjji93XQlA

## Project Notes

## Assignment 6

https://www.w3schools.com/jsref/prop_form_action.asp

https://www.w3schools.com/jsref/prop_html_style.asp

https://www.w3schools.com/js/js_json_stringify.asp

https://www.w3schools.com/jsref/prop_win_sessionstorage.asp

https://jsoneditoronline.org/indepth/data-fetching/post-json/
