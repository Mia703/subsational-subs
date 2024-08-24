// ========== get user's first name
const userName = document.getElementById("user-name");
const fetchUser = sessionStorage.getItem("currentUser");

if (fetchUser) {
	const user = JSON.parse(fetchUser);
	userName.innerHTML = user.first_name;
}

// ========== add to cart
const orderTotal = document.getElementById("total");
let order = [];

const orderItemsContainer = document.querySelector(
	"section.cart .order-items.container"
);

const addToCartButton = document.querySelectorAll(".cart.button");
let total = 0;
addToCartButton.forEach((item) => {
	item.addEventListener("click", (event) => {
		const parent = event.currentTarget.parentNode;
		const name = parent.querySelector(".name").innerHTML;
		const desc = parent.querySelector(".description").innerHTML;
		const tempPrice = parent.querySelector("span.price").innerHTML;
		const price = parseFloat(tempPrice.substr(1, tempPrice.length - 1));
		const image = parent.querySelector("img").src;

		total += price;

		const orderItem = {
			name,
			desc,
			price,
			image,
			currentTotal: total.toFixed(2),
		};

		order.push(orderItem);

		orderItemsContainer.innerHTML += `
			<div class="order-item">
				<p class="name">${orderItem.name}</p>
				<p class="price">$${orderItem.price}</p>
			</div>
		`;
		orderTotal.innerHTML = `$${orderItem.currentTotal}`;
	});
});

// ====== checkout
const checkoutButton = document.getElementById("checkout");

async function postData() {
	if (fetchUser) {
		const user = JSON.parse(fetchUser);
		const url = `https://virtserver.swaggerhub.com/ict4510-course/ict4510/1.0.0/api/menus?api_key=${user.api_key}`;

		let sendOrder = [];
		order.forEach((i) => {
			const item = {
				item: i.name,
				description: i.desc,
				price: `$${i.price}`,
			};
			sendOrder.push(item);
		});

		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"x-access-token": `${user.token}`,
				},
				body: JSON.stringify(sendOrder),
			});

			const status = response.status;
			if (status < 400) {
				order = [];
				sendOrder = [];
				orderItemsContainer.innerHTML = "";
				orderTotal.innerHTML = `$0.00`;
				alert(
					"Your checkout was successful! Your order will be done in 20 to 30 minutes."
				);
			} else {
				alert("Sorry, we were unable to check you out. Please try again.");
			}
		} catch (e) {
			console.log(`checkout Error: postData() Error: ${e}`);
		}
	}
}

checkoutButton.addEventListener("click", postData);

const getHistoryButton = document.getElementById("getHistory");

async function getData() {
	if (fetchUser) {
		const user = JSON.parse(fetchUser);
		const url = `https://ict4510.herokuapp.com/api/menus?api_key=${user.api_key}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
			});

			const status = response.status;

			if (status < 400) {
				const content = await response.json();
			} else {
				// TODO: alert
			}
		} catch (e) {
			console.log(`getHistory Error: getData() Error: ${e}`);
		}
	}
}

getHistoryButton.addEventListener("click", getData);

const logoutLink = document.getElementById("logout");

function logout(event) {
	event.preventDefault();
	sessionStorage.removeItem("currentUser");
	window.location.href = "./signup.html";
}

logoutLink.addEventListener("click", logout);

// how to select parent element: https://stackoverflow.com/questions/47654271/javascript-get-parent-element-values-on-click-event
