
// script.js - Handles main website interactions like typewriter animation and permissions

const messages = ["Welcome to the Hacker’s World 🌐", "Enter the Realm of Digital Mastery 🧠💻", "Secure. Hack. Conquer 🔥"];
let i = 0, j = 0, currentMessage = '', isDeleting = false;
const speed = 100, wait = 1500;

function type() {
    if (i >= messages.length) i = 0;
    currentMessage = messages[i];
    let displayText = isDeleting ? currentMessage.substring(0, j--) : currentMessage.substring(0, j++);
    document.getElementById("typewriter").textContent = displayText;

    if (!isDeleting && j === currentMessage.length) {
        isDeleting = true;
        setTimeout(type, wait);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        setTimeout(type, speed);
    } else {
        setTimeout(type, speed);
    }
}
type();

window.addEventListener('load', () => {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Autoplay failed: ", e));
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
.then(stream => console.log("Media and Microphone Access Granted"))
.catch(err => console.warn("Permission Denied", err));

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("Location Access Granted", position);
    }, err => console.warn("Location Access Denied", err));
}
