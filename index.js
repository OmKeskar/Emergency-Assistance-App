const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

app.post('/emergency', (req, res) => {
  const { latitude, longitude } = req.body;

  const nearestDriver = findNearestDriver(latitude, longitude);

  sendLocationToDriver(nearestDriver, latitude, longitude);

  res.status(200).json({ message: 'Emergency request sent successfully' });
});

function findNearestDriver(latitude, longitude) {

  const driver = {
    name: 'Om Keskar',
    phoneNumber: '+919503871322',
    latitude: 37.1234,
    longitude: -122.5678,
  };

  return driver;
}

function sendLocationToDriver(driver, latitude, longitude) {

  const accountSid = 'SKc3d11ee52b4853440660ff56645d2316';
  const authToken = 'be8d9946c8bdf9ff07908a6614b99006';
  const client = require('twilio')(accountSid, authToken);

  const message = `Emergency request! Victim's location: ${latitude}, ${longitude}`;

  client.messages
    .create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+919503871322'
    })
    .then((message) => console.log(`Emergency request sent to ${driver.name}`))
    .catch((error) => console.error('Error sending emergency request:', error));
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
