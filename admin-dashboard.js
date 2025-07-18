
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'HackerX_Rohan404' && pass === 'CyberX_Rohan@8080') {
    alert('✅ ACCESS GRANTED');
    document.body.innerHTML = '<h1>Welcome Back, Mr. CyberX Rohan404...</h1>';
    setTimeout(() => {
      window.location.href = 'admin-dashboard.html';
    }, 2000);
  } else {
    alert('❌ ACCESS DENIED BY SITE OWNER');
    document.body.innerHTML = '<h2>Unauthorized Attempt, Intruder Detected 👾🤖</h2>';
  }
}
