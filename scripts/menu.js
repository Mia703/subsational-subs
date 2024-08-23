// let mouseDown = false;
// let startX, scrollLeft;
// const slider = document.querySelector(".hot-subs.container");

// const startDragging = (e) => {
// 	mouseDown = true;
// 	startX = e.pageX - slider.offsetLeft;
// 	scrollLeft = slider.scrollLeft;
// };

// const stopDragging = (e) => {
// 	mouseDown = false;
// };

// const move = (e) => {
// 	e.preventDefault();
// 	if (!mouseDown) {
// 		return;
// 	}
// 	const x = e.pageX - slider.offsetLeft;
// 	const scroll = x - startX;
// 	slider.scrollLeft = scrollLeft - scroll;
// };

// // Add the event listeners
// slider.addEventListener("mousemove", move, false);
// slider.addEventListener("mousedown", startDragging, false);
// slider.addEventListener("mouseup", stopDragging, false);
// slider.addEventListener("mouseleave", stopDragging, false);

// how to hide scroll bar: https://blog.logrocket.com/hide-scrollbar-without-impacting-scrolling-css/#hiding-scrollbar
// how to make content scroll draggable: https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c


const orderItemsContainer = document.querySelector('.order.container > .content > .order-items');
const subTotal = document.querySelector('.order.container > .content .subtotal');
let orderTotal = 0;

const addToCartBtn = document.querySelectorAll(".product.card .cart.button");
addToCartBtn.forEach((item) => {
	item.addEventListener("click", (event) => {
		var parent = event.currentTarget.parentNode;
		var name = parent.querySelector(".name").innerHTML;
		// TODO: add description
		var price = parent.querySelector(".price").innerHTML; // returns price with $

		// TODO: name, description, and price are turned into object
		// TODO: object is saved to global orderItemsList
		// TODO: orderItemsList is JSON.stringify() and sent to https://ict4510.herokuapp.com/api/menus/ on checkout button click

		orderTotal += parseFloat(price.substr(1, price.length)); // removes $, converts string to float, and adds it to orderTotal

		orderItemsContainer.innerHTML += `<p>${name} ${price}</p>`;
		subTotal.innerHTML = orderTotal.toFixed(2);
	});
});

// how to select parent element: https://stackoverflow.com/questions/47654271/javascript-get-parent-element-values-on-click-event