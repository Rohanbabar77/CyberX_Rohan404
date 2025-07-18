window.addEventListener("load", () => {
  const audio = new Audio("your-music.mp3");
  audio.volume = 1.0;
  audio.loop = true;
  audio.play().catch((e) => {
    console.warn("Autoplay failed:", e);
  });
});