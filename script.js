const audio = new Audio("music.mp3");
audio.volume = 1.0;
audio.autoplay = true;
audio.loop = true;
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    audio.play().catch(e => console.log("Autoplay failed"));
  }, 1000);
});
