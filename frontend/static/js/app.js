const BASE_URL = "http://127.0.0.1:5000";

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert("Invalid credentials");
    } else {
      alert("Login successful");

      // ✅ store user session (temporary)
      localStorage.setItem("user_id", data.user_id);

      window.location.href = "chat.html";
    }
  })
  .catch(err => console.error(err));
}

// SIGNUP
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert("Signup failed");
    } else {
      alert("Signup successful");
      window.location.href = "login.html";
    }
  })
  .catch(err => console.error(err));
}

// CHAT (placeholder for now)
function sendMessage() {
  const msg = document.getElementById("msg").value;

  fetch("http://127.0.0.1:5000/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: msg })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.response;
  });
}