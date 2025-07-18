function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "HackerX_Rohan404" && password === "CyberX_Rohan@8080") {
    alert("✅ ACCESS GRANTED\nWelcome Back, Mr. CyberX Rohan404...");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("❌ ACCESS DENIED BY SITE OWNER\nUnauthorized Attempt, Intruder Detected 👾🤖");
    document.querySelector(".login-box").style.display = "none";
  }
}
