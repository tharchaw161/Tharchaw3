function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Simple demo login (you can change this)
    const correctUsername = "Tharchaw";
    const correctPassword = "241200";

    if (username === "" || password === "") {
        error.textContent = "Please fill in all fields 🐾";
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        alert("Welcome " + username + " 💖");
        window.location.href = "home.html"; // create this page later
    } else {
        error.textContent = "Incorrect username or password 😿";
    }
}