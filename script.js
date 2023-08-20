function sendEmergencyRequest() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendLocationToServer);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

function sendLocationToServer(position) {
  const { latitude, longitude } = position.coords;


  fetch('/emergency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ latitude, longitude }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Emergency request sent successfully');
      } else {
        alert('Failed to send emergency request');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while sending the emergency request');
    });
}
