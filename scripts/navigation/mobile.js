//  display mobile navigation
let mobileOpenButton = document.getElementById("mobile-nav-open");
let mobileCloseButton = document.getElementById("mobile-nav-close");
let mobileNav = document.querySelector("nav#mobile");

function displayMenu() {
	mobileNav.classList.toggle("display-menu");
}

// toggles display-menu class
mobileOpenButton.addEventListener("click", displayMenu);
mobileCloseButton.addEventListener("click", displayMenu);
