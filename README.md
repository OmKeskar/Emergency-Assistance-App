# Emergency Assistance App

The Emergency Assistance App is a web application designed to provide quick and efficient emergency assistance to users in need. It allows users to send their location coordinates to the nearest available driver, who can then respond and provide assistance.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Emergency Button**: The app provides a prominent emergency button that users can click to request assistance.
- **Geolocation**: The app utilizes the Geolocation API to retrieve the user's current location coordinates.
- **Server-side Handling**: The app sends the user's location coordinates to a server for processing and finding the nearest available driver.
- **Twilio Integration**: The app integrates with the Twilio API to send a WhatsApp message to the nearest driver, notifying them of the emergency request.
- **Real-time Feedback**: The app provides real-time feedback to the user, displaying success or failure messages based on the response from the server.
- **Responsive Design**: The app is designed to be responsive and accessible on various devices, ensuring a seamless user experience.

## Demo

1. User opens the Emergency Assistance App in their web browser.

2. The app requests permission to access the user's location.

3. Once permission is granted, the app retrieves the user's current latitude and longitude coordinates using the Geolocation API.

4. The app sends a POST request to the server's `/emergency` endpoint, including the user's latitude and longitude coordinates in the request body.

5. The server receives the request and calculates the nearest available driver based on the user's location.

6. The server sends a notification to the nearest driver, providing them with the user's location details and the emergency request.

7. The driver receives the notification on their mobile device and can choose to accept or decline the request.

8. If the driver accepts the request, their location is sent back to the server.

9. The server sends a confirmation message to the user, informing them that help is on the way.

10. The user can track the driver's location in real-time on a map within the app.

11. Once the driver arrives at the user's location, the app notifies both the user and the driver.

12. The user and driver can rate and provide feedback on their experience.

This demo showcases the basic functionality of the Emergency Assistance App, allowing users to quickly request emergency assistance and connect with the nearest available driver.

## Technologies Used

- HTML: The standard markup language for creating the structure of web pages.
- CSS: The language used for styling the visual presentation of web pages.
- JavaScript: The programming language used for client-side functionality and interactivity.
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js that simplifies the development of server-side applications.
- Twilio API: An API that provides programmable communication services, including sending WhatsApp messages.
- Geolocation API: A browser API that allows retrieving the user's current location coordinates.

## Installation

1. Clone the repository:
2. Install dependencies:
3. Set up a Twilio account and obtain API credentials.
4. Update the `accountSid` and `authToken` variables in the `script.js` file with your Twilio API credentials.
5. Start the server:
6. Access the app in your browser at `http://localhost:3000`

## Usage

1. Open the app in your browser.

2. Click the "Emergency" button to send your location coordinates to the server.

3. The server will find the nearest available driver and send them a WhatsApp message with your location details.

4. You will receive real-time feedback on the success or failure of the emergency request.

## Contributing

Contributions to the Emergency Assistance App are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

To contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

The Emergency Assistance App is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgements

- The Emergency Assistance App was inspired by the need for quick and efficient emergency assistance in various situations.
- Special thanks to the developers and contributors of the Twilio API and the Geolocation API for providing the necessary tools to build this app.
