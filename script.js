
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const loadingOverlay = document.getElementById('loadingOverlay');
    const welcomeModal = document.getElementById('welcomeModal');
    const okButton = document.getElementById('okButton');
    const themeToggle = document.getElementById('themeToggle');
    const adminLink = document.getElementById('adminLink');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const typewriterElements = document.querySelectorAll('.typewriter-text');
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const contactForm = document.querySelector('.contact-form'); // Get the contact form

    function showToast(title, message, duration = 3000) {
        let toast = document.getElementById('toastMessage');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toastMessage';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<strong>${title}</strong><br>${message}`;
        toast.style.display = 'block';
        void toast.offsetWidth;
        toast.style.animation = 'none';
        setTimeout(() => {
            toast.style.animation = 'fadeInOutToast 4s forwards';
        }, 10);
        setTimeout(() => {
            toast.style.display = 'none';
        }, duration);
    }

    function showHackingPopup(title, message) {
        const popup = document.createElement('div');
        popup.className = 'modal';
        popup.innerHTML = `
            <div class="modal-content hacker-popup">
                <h2 class="glitch-text" data-text="${title}">${title}</h2>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }

    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        welcomeModal.style.display = 'flex';
    }, 2000);

    okButton.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
        showToast('Welcome to CyberXRohan404 👨‍💻', 'You’re being monitored 👀');
    });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '💡';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '💡';
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '💡';
    } else {
        themeToggle.textContent = '💡';
    }

    adminLink.addEventListener('click', (e) => {
        e.preventDefault();
        adminLoginModal.style.display = 'flex';
    });

    adminLoginModal.addEventListener('click', (e) => {
        if (e.target === adminLoginModal || e.target.classList.contains('close-button')) {
            adminLoginModal.style.display = 'none';
            adminLoginForm.reset();
        }
    });

    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        const correctUsername = "HackerX_Rohan404";
        const correctPassword = "CyberX_Rohan@8080";
        adminLoginModal.style.display = 'none';
        if (username === correctUsername && password === correctPassword) {
            showHackingPopup("ACCESS GRANTED ✅", "Welcome Back, Mr. CyberX_Rohan404... 🚀");
            setTimeout(() => {
                window.location.href = 'admin-dashboard.html';
            }, 3000);
        } else {
            showHackingPopup("ACCESS DENIED ❌", "Unauthorized access attempt. Intruder detected! 🚨");
        }
        adminLoginForm.reset();
    });

    function requestBrowserPermissions() {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                } else {
                    console.log('Notification permission denied.');
                }
            });
        }

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(stream => {
                console.log('Camera permission granted.', stream);
                stream.getTracks().forEach(track => track.stop());
                showToast('Camera Access Granted!', 'Your camera stream is active (simulated).', 2000);
            })
            .catch(err => {
                console.warn('Camera permission denied or error:', err);
                showToast('Camera Access Denied!', 'Please allow camera access for full experience.', 2000);
            });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log('Geolocation permission granted:', position.coords);
                    showToast('Location Access Granted!', `Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`, 2000);
                    let visitorLocations = JSON.parse(localStorage.getItem('visitorLocations')) || [];
                    const timestamp = new Date().toLocaleString();
                    const newLocation = {
                        ip: 'Simulated IP',
                        lat: position.coords.latitude.toFixed(2),
                        lon: position.coords.longitude.toFixed(2),
                        timestamp: timestamp,
                        userAgent: navigator.userAgent
                    };
                    visitorLocations.push(newLocation);
                    localStorage.setItem('visitorLocations', JSON.stringify(visitorLocations));
                },
                error => {
                    console.warn('Geolocation permission denied or error:', error);
                    showToast('Location Access Denied!', 'Please allow location access for full experience.', 2000);
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        }
    }
    setTimeout(requestBrowserPermissions, 2500);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const typewriterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textElement = entry.target;
                const originalText = textElement.getAttribute('data-original-text');
                textElement.textContent = '';
                textElement.style.width = '0';
                textElement.style.animation = 'none';
                let i = 0;
                const typingInterval = setInterval(() => {
                    if (i < originalText.length) {
                        textElement.textContent += originalText.charAt(i);
                        textElement.style.width = `${textElement.scrollWidth}px`;
                        i++;
                    } else {
                        clearInterval(typingInterval);
                        textElement.style.animation = 'blink-caret 0.75s step-end infinite';
                    }
                }, 50);
                observer.unobserve(textElement);
            } else {
                const textElement = entry.target;
                textElement.textContent = '';
                textElement.style.width = '0';
                textElement.style.animation = 'none';
            }
        });
    }, options);

    typewriterElements.forEach(element => {
        element.setAttribute('data-original-text', element.textContent);
        element.textContent = '';
        typewriterObserver.observe(element);
    });

    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash.startsWith('#')) {
                e.preventDefault();
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const message = this.querySelector('[name="message"]').value;
            const timestamp = new Date().toLocaleString();
            const submission = { name, email, message, timestamp };
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
            submissions.push(submission);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            showToast('Message Sent!', 'Your message has been received (simulated).', 3000);
            this.reset();
        });
    }

    function logPageVisit() {
        let visits = JSON.parse(localStorage.getItem('pageVisits')) || [];
        const timestamp = new Date().toLocaleString();
        const path = window.location.pathname;
        const referrer = document.referrer;
        const userAgent = navigator.userAgent;
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const visitData = { timestamp, path, referrer, userAgent, screenRes };
        visits.push(visitData);
        localStorage.setItem('pageVisits', JSON.stringify(visits));
    }
    logPageVisit();
});
