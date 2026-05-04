const BASE_URL = "https://capstone-ai-app-rohith123.azurewebsites.net";

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

// CHAT
function sendMessage() {
  const msg = document.getElementById("msg").value;

  fetch(`${BASE_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: msg })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.response;
  })
  .catch(err => console.error(err));
}

function loadTasks() {
  const user_id = localStorage.getItem("user_id");

  fetch(`${BASE_URL}/tasks/${user_id}`)
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${task.title}
          <button onclick="deleteTask(${task.id})">❌</button>
        `;
        list.appendChild(li);
      });
    });
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const user_id = localStorage.getItem("user_id");

  fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, user_id })
  }).then(() => loadTasks());
}

function deleteTask(taskId) {
  fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "DELETE"
  }).then(() => loadTasks());
}