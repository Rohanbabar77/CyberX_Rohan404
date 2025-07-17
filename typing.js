
const text = "Welcome to CyberX Rohan404 - The Hacker's World 👾";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
window.onload = typeEffect;
