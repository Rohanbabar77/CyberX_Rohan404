const audio = new Audio("Sayfalse_Junior_RCE_-_FUNK_MI_CAMINO_(FeelMP3.com).mp3");
audio.volume = 1.0;
audio.autoplay = true;
audio.loop = true;
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    audio.play().catch(e => console.log("Autoplay failed"));
  }, 1000);
});
