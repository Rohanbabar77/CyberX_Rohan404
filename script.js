function requestPermissions() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(() => {
        Notification.requestPermission();
        navigator.geolocation.getCurrentPosition(() => {
            document.getElementById('monitorMsg').style.display = 'block';
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Create audio element
    const bgMusic = document.createElement("audio");
    bgMusic.src = "Sayfalse_Junior_RCE_-_FUNK_MI_CAMINO_(FeelMP3.com).mp3"; // Replace with your music file path (must be in same folder or give correct path)
    bgMusic.autoplay = true;
    bgMusic.loop = true;
    bgMusic.volume = 1.0; // Full volume

    // Play only after user interaction or permission (required by browsers)
    document.body.addEventListener('click', () => {
        bgMusic.play().catch((error) => {
            console.warn("Autoplay blocked by browser:", error);
        });
    }, { once: true });

    // Optionally show a message
    console.log("🔊 Music will autoplay after user interaction...");
});
