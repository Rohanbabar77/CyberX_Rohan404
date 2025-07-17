function startTyping() {
  const el = document.getElementById("typing");
  const phrases = [
    "Welcome to my Cyber world...",
    "I hack ethically, learn daily!",
    "11th Grade Student & Hacker.",
    "Solapur's CyberX_Rohan404!"
  ];
  let i = 0, j = 0, del = false;

  function type() {
    const current = phrases[i];
    el.textContent = del ? current.slice(0, j--) : current.slice(0, j++);
    if (!del && j === current.length) { del = true; setTimeout(type, 1000); }
    else if (del && j === 0) { del = false; i = (i+1)%phrases.length; setTimeout(type, 300); }
    else setTimeout(type, del ? 50 : 150);
  }
  type();
}