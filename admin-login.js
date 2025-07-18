function checkCredentials() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "HackerX_Rohan404" && password === "CyberX_Rohan@8080") {
    alert("ACCESS GRANTED ✅️");
    document.getElementById("loginPanel").style.display = "none";
    document.getElementById("permissionMessage").classList.remove("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
  } else {
    alert("ACCESS DENIED BY SITE OWNER ❌️\nUnauthorized Attempt, Intruder Detected 👾🤖");
    document.getElementById("loginPanel").classList.add("shake");
    setTimeout(() => {
      document.getElementById("loginPanel").classList.remove("shake");
    }, 1000);
  }
}
