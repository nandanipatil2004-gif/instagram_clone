const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "🙈";
    } else {
        password.type = "password";
        toggle.textContent = "👁️";
    }
});

const form = document.getElementById("loginform");
const username = document.getElementById("username");
const loginBtn = document.getElementById("loginBtn");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (username.value.trim() === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        valid = false;
    }

    if (password.value.trim() === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    } else if (password.value.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
        valid = false;
    }

    if (valid) {
        loginBtn.disabled = true;
        loginBtn.innerHTML = "⏳ Logging in...";

    setTimeout(function(){

        alert("Login Successful!");

        form.reset();

        loginBtn.disabled = false;
        loginBtn.innerHTML = "Log In";

        // Agar baad me redirect karna ho:
        // window.location.href = "index.html";

    },2000);
}
});