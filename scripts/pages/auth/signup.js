/***
 * Amya Moore
 * ICT 4510 - Summer 2024
 * signs up user
 */

const signupForm = document.getElementById("signup-form");
const url = signupForm.action;

async function postData(event) {
	event.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	const user = {
		username,
		password,
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(user),
		});

		const status = response.status;

		if (status && status < 400) {
			const content = await response.json();
			sessionStorage.setItem("currentUser", JSON.stringify(content));

			signupForm.reset();

			window.location.href = "./menu.html";
		} else {
			alert("Sorry, you're sign up was unsuccessful. Please try again.");
			signupForm.reset();
		}
	} catch (e) {
		console.log(`signup Error: postData() Error: ${e}`);
	}
}

signupForm.addEventListener("submit", postData);
