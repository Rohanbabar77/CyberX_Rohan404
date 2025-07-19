document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("audio/Funkmicamino.mp3"); // 📁 Your music path here
    audio.loop = true; // 🔁 Music will keep playing
    audio.volume = 1.0; // 🔊 Full volume

    // Try to play after small delay to avoid browser block
    setTimeout(() => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("🎵 Music started automatically!");
                })
                .catch((error) => {
                    console.warn("🚫 Autoplay blocked by browser:", error);
                });
        }
    }, 500); // 🕐 Wait 0.5 seconds before autoplay
});
