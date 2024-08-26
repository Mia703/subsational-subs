/***
 * Amya Moore
 * ICT 4510 - Summer 2024
 * displays all product images
 */

const imagePath = "../../assets/product_images/";

const hotSubs = [
	{
		id: 14,
		name: "Smoky Southwestern Cheese Steak",
		description:
			"Grilled onions, peppers, white American cheese, and Smoky Southwest Sauce",
		price: 9.95,
		image:
			"grilled-onions-peppers-white-american-cheese-and-smoky-southwestern.png",
	},
	{
		id: 15,
		name: "Salsa Verde Chicken Cheese Steak",
		description:
			"Grilled onions, peppers, white American cheese, and Salsa Verde sauce",
		price: 9.75,
		image:
			"grilled-onions-peppers-white-american-cheese-and-salsa-verde-sauce.png",
	},
	{
		id: 16,
		name: "Chicken Philly",
		description: "Grilled onions, peppers, and white American cheese",
		price: 9.35,
		image: "grilled-onions-peppers-white-american-cheese.png",
	},
	{
		id: 17,
		name: "Big Kahuna Chicken Cheese Steak",
		description:
			"Grilled onions, peppers, mushrooms, jalapeños, and extra white American cheese",
		price: 9.85,
		image:
			"grilled-onions-peppers-mushrooms-jalapenos-extra-white-american.png",
	},
	{
		id: 18,
		name: "Bacon Ranch Chicken Cheese Steak",
		description:
			"Applewood smoked bacon, lettuce, tomato, white American cheese, and ranch dressing",
		price: 9.85,
		image: "applewood-smoked-bacon-lettuce-tomato-white-american-cheese.png",
	},
	{
		id: 19,
		name: "California Chicken Cheese Steak",
		description: "Lettuce, tomato, mayo, and white American cheese",
		price: 9.55,
		image: "lettuce-tomato-mayo-and-white-american-cheese.png",
	},
	{
		id: 20,
		name: "Buffalo Chicken Cheese Steak",
		description:
			"Frank's Red Hot Sauce, lettuce, tomato, and white American cheese with blue cheese dressing",
		price: 9.85,
		image: "franks-red-hot-sauce-lettuce-tomato-white-american-cheese.png",
	},
	{
		id: 21,
		name: "Famous Steak Philly",
		description: "Grilled onions, peppers, and white American cheese",
		price: 9.65,
		image: "grilled-onions-peppers-white-american-cheese-steak.png",
	},
	{
		id: 22,
		name: "Chipotle Steak Cheese Steak",
		description:
			"Grilled onions, peppers, white American cheese, and chipotle mayo",
		price: 9.85,
		image:
			"grilled-onions-peppers-white-american-cheese-and-chipotle-mayo-steak.png",
	},
	{
		id: 23,
		name: "Big Kahuna Steak Cheese Steak",
		description:
			"Grilled onions, peppers, mushrooms, jalapeños, and extra white American cheese",
		price: 10.05,
		image:
			"grilled-onions-peppers-mushrooms-jalapenos-extra-white-american-steak.png",
	},
	{
		id: 24,
		name: "Grilled Portabella Mushroom and Swiss",
		description:
			"Portabella mushrooms, green bell peppers, onions, and swiss cheese",
		price: 9.45,
		image: "fresh-portabella-mushrooms-green-bell-peppers-onions.png",
	},
	{
		id: 25,
		name: "Portabella Cheese Steak",
		description:
			"Portabella mushrooms, peppers, onions, and white American cheese",
		price: 10.25,
		image: "portabella-mushrooms-peppers-onions-and-white-american.png",
	},
	{
		id: 26,
		name: "Portabella Chicken Cheese Steak",
		description:
			"Chicken, portabella mushrooms, peppers, onions, and white American cheese",
		price: 10.05,
		image: "portabella-mushrooms-peppers-onions-and-white-american-chicken.png",
	},
];

const coldSubs = [
	{
		id: 0,
		name: "Ham and Provolone",
		description: "Provolone and ham",
		price: 8.35,
		image: "provolone-and-ham.png",
	},
	{
		id: 1,
		name: "The Veggie",
		description: "Swiss, provolone, and green bell peppers",
		price: 8.35,
		image: "swiss-provolone-green-bell-peppers.png",
	},
	{
		id: 2,
		name: "The Super Sub",
		description: "Provolone, ham, prosciuttini and cappacuolo",
		price: 9.35,
		image: "provolone-ham-prosciuttini-and-cappacuolo.png",
	},
	{
		id: 3,
		name: "Turkey and Provolone",
		description: "Provolone and Turkey",
		price: 9.35,
		image: "provolone-and-turkey.png",
	},
	{
		id: 4,
		name: "Tuna Fish",
		description: "Tuna with lettuce and tomato",
		price: 9.35,
		image: "freshly-made-on-premises.png",
	},
	{
		id: 5,
		name: "The Original Italian",
		description:
			"Provolone, ham, prosciuttini, cappacuolo, salami, and pepperoni",
		price: 10.35,
		image: "provolone-ham-prosciuttini-cappacuolo-salami-and-pepperoni.png",
	},
	{
		id: 6,
		name: "Club Sub",
		description: "Turkey, ham, provolone, applewood smoked bacon, and mayo",
		price: 10.35,
		image: "turkey-ham-provolone-applewood-smoked-bacon-mayo.png",
	},
	{
		id: 7,
		name: "Club Supreme",
		description: "Roast beef, turkey, swiss, applewood smoked bacon, and mayo",
		price: 10.55,
		image: "roast-beef-turkey-swiss-applewood-smoked-bacon-and-mayo.png",
	},
	{
		id: 8,
		name: "BLT",
		description: "Bacon, lettuce, tomato, and mayo",
		price: 9.35,
		image: "bacon-lettuce-and-tomato.png",
	},
	{
		id: 9,
		name: "The Number Four",
		description: "Provolone, prosciuttini, and cappacuolo",
		price: 9.35,
		image: "provolone-prosciuttini-and-cappacuolo.png",
	},
	{
		id: 10,
		name: "Stickball Special",
		description: "Provolone, ham, and salami",
		price: 8.35,
		image: "provolone-ham-and-salami.png",
	},
	{
		id: 11,
		name: "Cancro Special",
		description:
			"All natural oven-roasted top rounds and provolone, with a layer of pepperoni",
		price: 10.75,
		image:
			"all-natural-oven-roasted-top-rounds-and-provolone-perfectly-comp.png",
	},
	{
		id: 12,
		name: "All Time Favourite",
		description: "Provolone, ham, and cappacuolo",
		price: 8.35,
		image: "provolone-ham-and-cappacuolo.png",
	},
];

const sides = [
	{
		id: 27,
		name: "Bottled Soda and Chips",
		description: "20oz bottled drink and chips",
		price: 4.39,
		image: "chips-and-soda.png",
	},
	{
		id: 28,
		name: "Bottled Water and Chips",
		description: "20oz bottled water and chips",
		price: 4.19,
		image: "chips-and-water.png",
	},
	{
		id: 29,
		name: "Pureleaf Tea and Chips",
		description: "",
		price: 4.39,
		image: "chips-and-tea.png",
	},
	{
		id: 30,
		name: "Regular Drink and Chips",
		description: "22oz fountain drink and chips",
		price: 4.09,
		image: "chips-and-cup-reg.png",
	},
	{
		id: 31,
		name: "Giant Drink and Chips",
		description: "32oz fountain drink and chips",
		price: 4.29,
		image: "chips-and-cup-large.png",
	},
	{
		id: 32,
		name: "Chips",
		description:
			"Doritos Cool Ranch, Doritos Nacho, Lays Classic, Miss Vickie's Jalapeño, or Miss Vickie's Sea Salt",
		price: 1.95,
		image: "chips.png",
	},
	{
		id: 33,
		name: "Fountain Drink",
		description: "Your favourite Pepsi products, self-served in-store",
		price: 2.75,
		image: "cup.png",
	},
	{
		id: 34,
		name: "Bottled Water",
		description: "20oz Aquafina bottled water",
		price: 2.65,
		image: "aquafina.png",
	},
	{
		id: 35,
		name: "Soda",
		description:
			"20oz bottled Pepsi, Pepsi Zero Sugar, Pepsi Wild Cherry, or Mountain Dew",
		price: 3.09,
		image: "bottled-soda.png",
	},
	{
		id: 36,
		name: "Celsius",
		description: "12oz Celsius Sparking Orange, Tropical Vibe, or Peach Vibe",
		price: 3.59,
		image: "celsius.png",
	},
	{
		id: 37,
		name: "Pureleaf Tea",
		description: "18.5oz Pureleaf Tea",
		price: 3.09,
		image: "pureleaf-tea.png",
	},
	{
		id: 38,
		name: "Cookie",
		description: "Fresh-baked and delicious",
		price: 1.35,
		image: "cookie.png",
	},
	{
		id: 39,
		name: "Snickerdoodle (GF)",
		description: "Gluten-free Snickerdoodle cookie",
		price: 2.85,
		image: "cookie-snickerdoodle.png",
	},
	{
		id: 40,
		name: "Brownie",
		description: "Gooey chocolate chip brownie",
		price: 2.75,
		image: "chocolate-chip-brownie.png",
	},
	{
		id: 41,
		name: "Bubly",
		description: "16oz Bubly Sparkling Water",
		price: 2.89,
		image: "bubly.png",
	},
];

const hotSubsContainer = document.querySelector(".hot-subs.container");
const coldSubsContainer = document.querySelector(".cold-subs.container");
const sidesContainer = document.querySelector(".sides.container");

let hotSubsParagraph = "";
hotSubs.forEach((item) => {
	hotSubsParagraph += `
		<div id=${item.id} class="product card hot">
				<div class="image container">
					<img alt="${item.name}" src="${imagePath + item.image}">
				</div>
					<p class="name">${item.name}</p>
					<p class="description">${item.description}.</p>
					<button type="button" class="cart button yellow">Add to Cart <span class="price">$${
						item.price
					}</span></button>
		</div>
	`;
});
hotSubsContainer.innerHTML = hotSubsParagraph;

let coldSubsParagraph = "";
coldSubs.forEach((item) => {
	coldSubsParagraph += `
		<div class="product card cold">
				<div class="image container">
					<img alt="${item.name}" src="${imagePath + item.image}">
				</div>
					<p class="name">${item.name}</p>
					<p class="description">${item.description}.</p>
					<button type="button" class="cart button yellow">Add to Cart <span class="price">$${
						item.price
					}</span></button>
		</div>
	`;
});
coldSubsContainer.innerHTML = coldSubsParagraph;

let sidesParagraph = "";
sides.forEach((item) => {
	sidesParagraph += `
		<div class="product card side">
				<div class="image container">
					<img alt="${item.name}" src="${imagePath + item.image}">
				</div>
					<p class="name">${item.name}</p>
					<p class="description">${item.description}.</p>
					<button type="button" class="cart button yellow">Add to Cart <span class="price">$${
						item.price
					}</span></button>
		</div>
	`;
});
sidesContainer.innerHTML = sidesParagraph;

// how do display lists: https://techstacker.com/display-javascript-objects-in-html/
