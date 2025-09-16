function signup() {
  const username = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPass").value;
 
  localStorage.setItem("savedEmail", email);
  localStorage.setItem("savedPassword", password);
 
  alert("Signup successful! You can now login.");
  window.location.href = "login.html";
}
 
function login() {
  const enteredEmail = document.getElementById("loginUser").value;
  const enteredPassword = document.getElementById("loginPass").value;
 
  const savedEmail = localStorage.getItem("savedEmail");
  const savedPassword = localStorage.getItem("savedPassword");
 
  if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
    alert("Login successful! Welcome back.");
    window.location.href = "index.html";
  } else {
    alert("Login failed! Wrong email or password.");
  }
}
