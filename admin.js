
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("adminLogin");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    if (username === "HackerX_Rohan404" && password === "CyberX_Rohan@8080") {
      alert("✅ Welcome Back, Mr. CyberX Rohan...");
      window.location.href = "dashboard.html";
    } else {
      alert("❌ ACCESS DENIED ❌");
    }
  });
});
