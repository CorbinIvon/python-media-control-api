# Media Control API

This project provides a REST API for controlling media components, allowing users to simulate key presses for actions such as adjusting the system volume. It is built using Flask and includes a basic web interface for user interaction.

## Project Structure

```
media-control-api
├── app.py                # Main entry point of the application
├── media_controller.py   # Logic for simulating media control actions
├── templates
│   └── index.html       # HTML template for the media controller interface
├── static
│   ├── css
│   │   └── style.css     # CSS styles for the media controller interface
│   └── js
│       └── script.js     # JavaScript code for handling user interactions
├── pip_install.txt       # Required Python packages for the project
└── README.md             # Documentation for the project
```

## Setup Instructions

1. Clone the repository:

   ```
   git clone <repository-url>
   cd python-media-control-api
   ```

2. Create the virtual env and Install the required packages:

   ```
   python -m venv .venv
   .\.venv\Scripts\activate
   pip install -r pip_install.txt
   ```

3. Run the application:

   ```
   python app.py
   ```

4. Access the media controller interface by navigating to `http://<ip>/` in your web browser.

## Usage

- To increase the system volume, send a request to `http://<ip>/api/volume_up`.
- Use the web interface to trigger other media control actions as implemented.

## Contributing

Feel free to submit issues or pull requests for improvements or additional features.
