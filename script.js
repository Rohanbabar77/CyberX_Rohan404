document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("music.mp3"); // replace with your music file
  audio.volume = 1.0;
  audio.loop = true;
  audio.play().catch((err) => {
    console.warn("Autoplay blocked by browser:", err);
  });
});
