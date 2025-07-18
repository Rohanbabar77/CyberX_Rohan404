function requestPermissions() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(() => {
        Notification.requestPermission();
        navigator.geolocation.getCurrentPosition(() => {
            document.getElementById('monitorMsg').style.display = 'block';
        });
    });
}