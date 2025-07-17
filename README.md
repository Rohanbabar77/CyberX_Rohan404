# CyberX_Rohan404
Hacker Rohan404
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CyberXRohan404.com</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <link rel="icon" href="images/logo.png">
</head>

<body onload="requestPermissions(); showWelcomeNotification();">

  <!-- Permission Request Script -->
  <script>
    function requestPermissions() {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'camera' });
        navigator.permissions.query({ name: 'microphone' });
        navigator.permissions.query({ name: 'geolocation' });
        Notification.requestPermission();
      }
    }

    function showWelcomeNotification() {
      if (Notification.permission === 'granted') {
        new Notification('Welcome to CyberXRohan404 👨‍💻', {
          body: 'You’re being monitored 👀',
          icon: 'images/logo.png'
        });
      }
    }
  </script>

  <!-- Hacker Header -->
  <header>
    <h1>CYBERXROHAN404.COM</h1>
    <p>⚡ Ethical Hacker | Tech Expert | Cyber Security 🔒</p>
    <nav>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#certs">Certificates</a>
      <a href="#contact">Contact</a>
      <a href="/admin">Admin</a>
    </nav>
  </header>

  <!-- Home Section -->
  <section id="home">
    <h2>Welcome to the Hacker’s World</h2>
    <p>Learn, Hack, Secure – One Mission, One Legend 💻</p>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>✔️ Ethical Hacking</li>
      <li>✔️ Kali Linux & Termux</li>
      <li>✔️ Bug Bounty</li>
      <li>✔️ OSINT & Cyber Investigation</li>
      <li>✔️ Android Rooting & ROMs</li>
    </ul>
  </section>

  <!-- Certificates Section -->
  <section id="certs">
    <h2>Certificates</h2>
    <p>🧾 Be A White Hat Hacker & Pen Tester - Eduonix</p>
    <p>🧾 Ethical Hacking Essentials - EC-Council (Coming Soon)</p>
    <!-- More can be added later -->
  </section>

  <!-- Contact Section with reCAPTCHA -->
  <section id="contact">
    <h2>Contact Me</h2>
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Message..." required></textarea>
      <div class="g-recaptcha" data-sitekey="YOUR_PUBLIC_RECAPTCHA_KEY"></div>
      <button type="submit">Send</button>
    </form>
    <p>📞 <a href="https://wa.me/+919226901200">WhatsApp Chat</a></p>
    <p>📍 Solapur, Maharashtra</p>
    <p>🔗 <a href="https://t.me/CyberX_Rohan_404">Telegram</a></p>
    <p>📸 <a href="https://www.instagram.com/official_cyberx_rohan_404">Instagram</a></p>
    <p>📺 <a href="https://www.instagram.com/channel/AbYZ0Ay-GEWmLIPx/">Instagram Channel</a></p>
  </section>

  <footer>
    <p>© 2025 CyberXRohan404. All Rights Reserved. 👾</p>
  </footer>

</body>

</html>
