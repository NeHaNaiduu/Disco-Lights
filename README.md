# Disco-Lights

This project implements a simple "Disco Lights" effect using HTML, CSS, and JavaScript. It allows users to start and stop a dynamic background color animation by clicking buttons on the webpage.

### Features:

- **Start Button**: Initiates a dynamic color change effect on the webpage background.
- **Stop Button**: Halts the color change animation.
- **Random Colors**: Generates random hexadecimal colors for the background.

### How It Works:

1. **Color Generation**: The `switchC` function in `index.js` generates a random hexadecimal color.
2. **Start Functionality**: Clicking the "Start" button (`startBtn`) initiates an interval (`colorInterval`) that changes the background color every 100 milliseconds using `setInterval`.
3. **Stop Functionality**: Clicking the "Stop" button (`stopBtn`) clears the interval (`colorInterval`), stopping the color animation.

### Technologies Used:

- HTML
- CSS
- JavaScript

### Author:

Neha
