
// admin-dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    const totalVisitsElement = document.getElementById('totalVisits');
    const uniqueVisitsTodayElement = document.getElementById('uniqueVisitsToday');
    const messagesReceivedElement = document.getElementById('messagesReceived');
    const recentLocationsList = document.getElementById('recentLocationsList');
    const contactMessagesList = document.getElementById('contactMessagesList');
    const activeSessionsElement = document.getElementById('activeSessions'); // For current active session

    function updateDashboardStats() {
        const pageVisits = JSON.parse(localStorage.getItem('pageVisits')) || [];
        totalVisitsElement.textContent = pageVisits.length;

        const today = new Date().toDateString();
        const uniqueVisitors = new Set();
        pageVisits.forEach(visit => {
            const visitDate = new Date(visit.timestamp).toDateString();
            if (visitDate === today) {
                uniqueVisitors.add(visit.userAgent);
            }
        });
        uniqueVisitsTodayElement.textContent = uniqueVisitors.size;

        const contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        messagesReceivedElement.textContent = contactSubmissions.length;

        activeSessionsElement.textContent = "1";
    }

    function displayRecentLocations() {
        const visitorLocations = JSON.parse(localStorage.getItem('visitorLocations')) || [];
        recentLocationsList.innerHTML = '';

        const locationsToShow = visitorLocations.slice(-10).reverse();

        if (locationsToShow.length === 0) {
            recentLocationsList.innerHTML = '<p>No location data captured yet.</p>';
        } else {
            locationsToShow.forEach(loc => {
                const p = document.createElement('p');
                p.textContent = `Visitor (User-Agent: ${loc.userAgent ? loc.userAgent.substring(0, 50) + '...' : 'N/A'}): Lat: ${loc.lat}, Lon: ${loc.lon} - ${loc.timestamp}`;
                recentLocationsList.appendChild(p);
            });
        }
    }

    function displayContactMessages() {
        const contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        contactMessagesList.innerHTML = '';

        const messagesToShow = contactSubmissions.slice().reverse();

        if (messagesToShow.length === 0) {
            contactMessagesList.innerHTML = '<p>No contact messages received yet.</p>';
        } else {
            messagesToShow.forEach(submission => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>From:</strong> ${submission.name} (${submission.email})<br>
                               <strong>Time:</strong> ${submission.timestamp}<br>
                               <strong>Message:</strong> ${submission.message}`;
                contactMessagesList.appendChild(p);
            });
        }
    }

    const banIpButton = document.getElementById('banIpButton');
    const banIpInput = document.getElementById('banIpInput');

    if (banIpButton && banIpInput) {
        banIpButton.addEventListener('click', () => {
            const ipToBan = banIpInput.value.trim();
            if (ipToBan) {
                let bannedIPs = JSON.parse(localStorage.getItem('bannedIPs')) || [];
                if (!bannedIPs.includes(ipToBan)) {
                    bannedIPs.push(ipToBan);
                    localStorage.setItem('bannedIPs', JSON.stringify(bannedIPs));
                    alert(`IP ${ipToBan} has been "banned" (simulated).`);
                } else {
                    alert(`IP ${ipToBan} is already "banned".`);
                }
                banIpInput.value = '';
            } else {
                alert('Please enter an IP address to ban.');
            }
        });
    }

    updateDashboardStats();
    displayRecentLocations();
    displayContactMessages();

    setInterval(updateDashboardStats, 5000);
    setInterval(displayRecentLocations, 10000);
    setInterval(displayContactMessages, 10000);
});
