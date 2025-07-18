function validateAdmin(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === "HackerX_Rohan404" && pass === "CyberX_Rohan@8080") {
        alert("ACCESS GRANTED ✅️\nWelcome Back, Mr. CyberX Rohan404...");
        window.location.href = 'admin-dashboard.html';
    } else {
        alert("ACCESS DENIED BY SITE OWNER ❌️\nUnauthorized Attempt, Intruder Detected 👾🤖");
    }
    return false;
}