/***
 * Amya Moore
 * ICT 4510 - Summer 2024
 * returns the user's name from the saved object
 * saves orders via POST request
 * returns orders via GET request,
 * and then displays the,
 */

// ========== get user's first name
const userName = document.getElementById("user-name");
const fetchUser = sessionStorage.getItem("currentUser");
let user = null;
if (fetchUser) {
	user = JSON.parse(fetchUser);
	userName.innerHTML = user.first_name;
}

// ========== save order item
async function saveItem(item) {
	if (user != null) {
		try {
			const url = `https://ict4510.herokuapp.com/api/menus?api_key=${user.api_key}`;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"x-access-token": `${user.token}`,
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(item),
			});

			const status = response.status;

			if (status < 400) {
				console.log("saveItem: successfully saved order item");
				let list = "";
				getItems().then((content) => {
					total += parseFloat(item.price.substr(1, item.price.length - 1));
					content.forEach((item) => {
						list += `
					<div id=${item.id} class="order-item">
						<p class="name">${item.item}</p>
						<p class="price">${item.price}</p>
					</div>
				`;
					});
					orderItemsContainer.innerHTML = list;
					orderTotal.innerHTML = `$${total.toFixed(2)}`;
				});
			} else {
				console.log("saveItem: could not save order item");
			}
		} catch (e) {
			console.log(`saveItem Error: ${e}`);
		}
	}
}

const addToCartButton = document.querySelectorAll(".cart.button");
addToCartButton.forEach((item) => {
	item.addEventListener("click", (event) => {
		const parent = event.currentTarget.parentNode;
		const name = parent.querySelector(".name").innerHTML;
		const desc = parent.querySelector(".description").innerHTML;
		const price = parent.querySelector("span.price").innerHTML;

		const orderItem = {
			item: name,
			description: desc,
			price: price,
		};

		saveItem(orderItem);
	});
});

// ========== read order item
async function getItems() {
	if (user != null) {
		try {
			const url = `https://ict4510.herokuapp.com/api/menus?api_key=${user.api_key}`;
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
			});

			const status = response.status;

			if (status < 400) {
				const content = await response.json();
				return content.menu;
			}
		} catch (e) {
			console.log(`Error: ${e}`);
		}
	}
}

const orderItemsContainer = document.querySelector(
	"section.cart .order-items.container"
);
const orderTotal = document.getElementById("total");
let total = 0;
getItems().then((content) => {
	content.forEach((item) => {
		total += parseFloat(item.price.substr(1, item.price.length - 1));
		orderItemsContainer.innerHTML += `
			<div id=${item.id} class="order-item">
				<p class="name">${item.item}</p>
				<p class="price">${item.price}</p>
			</div>
		`;
	});
	orderTotal.innerHTML = `$${total.toFixed(2)}`;
});

// ========== checkout
const checkoutButton = document.getElementById("checkout");

// ========== delete order item
async function deleteItem(id) {
	if (user != null) {
		try {
			const url = `https://ict4510.herokuapp.com/api/menus?api_key=${user.api_key}&id=${id}`;
			const response = await fetch(url, {
				method: "DELETE",
				headers: {
					"x-access-token": `${user.token}`,
					"Content-Type": "application/json; charset=utf-8",
				},
			});

			const status = response.status;

			if (status < 400) {
				console.log("deleteItem: successfully deleted item");
			} else {
				console.log("deleteItem: could not delete item");
			}
		} catch (e) {
			console.log(`deleteItem Error: ${e}`);
		}
	}
}

function checkout() {
	getItems().then((content) => {
		content.forEach((item) => {
			deleteItem(item.id);
		});
		orderItemsContainer.innerHTML = '';
		orderTotal.innerHTML = `$0.00`;
	});
	alert('You have checked out successfully. Your order will be ready in 20 to 30 minutes.');
}

checkoutButton.addEventListener('click', checkout);


// ========== update order item
async function putItem(item) {
	if (user != null) {
		try {
			const url = `https://ict4510.herokuapp.com/api/menus?api_key=${user.api_key}`;
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(item),
			});

			const status = response.status;

			if (status < 400) {
				console.log("putItem: successfully updated item");
			} else {
				console.log("putItem: could not update item");
			}
		} catch (e) {
			console.log(`putItem Error: ${e}`);
		}
	}
}