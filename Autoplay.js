document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("audio/Funkmicamino.mp3"); // 🎶 Your music path
    audio.loop = true;
    audio.volume = 1.0;

    // 🎯 Fake user interaction hack
    const fakeBtn = document.getElementById("invisiblePlayBtn");

    const triggerAudio = () => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("🎵 Auto music started with fake click");
                })
                .catch((error) => {
                    console.warn("⚠️ Autoplay blocked:", error);
                });
        }
    };

    // 🧠 Wait and trigger fake click
    setTimeout(() => {
        fakeBtn.click(); // 👆 Fake click
        triggerAudio();  // 🎧 Play after click
    }, 1000); // 1 second delay
});
