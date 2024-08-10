const loginForm = document.getElementById("login-form");
const url = loginForm.action;

async function postData(event) {
	event.preventDefault();

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
		
		loginForm.reset(); // clears the form
		
		if (status < 400) {
			// save the user
			const content = await response.json();
			sessionStorage.setItem("currentUser", JSON.stringify(content.user));

			// TODO: navigate to menu page
			
		} else {
			alert("Sorry, this the wrong username or password. Please try again.");
		}
	} catch (e) {
		console.log(`login: postData Error: ${e}`);
	}
}

loginForm.addEventListener("submit", postData);
