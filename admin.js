
function checkLogin(event) {
  event.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === 'HackerX_Rohan404' && p === 'CyberX_Rohan@8080') {
    document.getElementById('loginMessage').innerText = 'Welcome Back, Mr. CyberX Rohan...';
    alert('Logged in as Admin!');
  } else {
    document.getElementById('loginMessage').innerText = 'ACCESS DENIED ❌';
  }
  return false;
}
function startEffects() {
  document.getElementById('bgMusic').volume = 1;
}
