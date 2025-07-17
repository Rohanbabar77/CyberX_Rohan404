function startMatrix() {
  const c = document.getElementById("matrix");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const cols = c.width / 14;
  const drops = Array.from({length: cols}).fill(1);
  const letters = '01🧠⚡X';

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = "14px courier";
    drops.forEach((y, i) => {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * 14, y * 14);
      if (y * 14 > c.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 35);
  window.onresize = () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  };
}