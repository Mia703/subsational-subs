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
		
		// 400 and above are client or server errors
		if (status < 400) {
			console.log('login: success! navigating to menu page');
			const content = await response.json();
			sessionStorage.setItem("currentUser", JSON.stringify(content.user));

			loginForm.reset();

			window.location.href = '../pages/menu.html';
			
		} else {
			alert("Sorry, this the wrong username or password. Please try again.");
			loginForm.reset();
		}
	} catch (e) {
		console.log(`login Error: postData() Error: ${e}`);
	}
}

loginForm.addEventListener("submit", postData);
