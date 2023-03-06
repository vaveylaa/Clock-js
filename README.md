# Clock Screen

This simple web page takes the user's name and displays a welcome message along with the current time.
 
The website is built using HTML, CSS, Bootstrap and JavaScript.

## How to Use

1. Prepare your HTML, CSS, and JavaScript files.
2. Use JavaScript code to open a dialog box to get the user's name.
3. Use the Document Object Model (DOM) API to display the user's entered name along with a welcome message.
4. Use the JavaScript Date object to display the current time, and use the setInterval() function to update the time every second.
5. Open your page in a web browser and enter the user's name.

## Code Example

// Kullanıcı adını al
let name = prompt("Adınız nedir?");

// Karşılama mesajını göster
let greetingDiv = document.getElementById("greeting");
greetingDiv.innerText = `Merhaba, ${name}!  Hoş geldin!`;

// Saati göster
let timeDiv = document.getElementById("time");

function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    let timeString = `${hour}:${minute}:${second} ${day}`;
    timeDiv.innerText = timeString;
}

// Her saniye saati güncelle
setInterval(showTime, 1000);

## Supported Browsers

This code has been tested on modern web browsers (Chrome, Firefox, Safari, Edge, etc.) and is expected to work properly.

## Installation

1. Clone the repository: `git clone https://github.com/vaveylaa/Clock-js.git`
2. Navigate to the project directory: `cd Clock-js`
3. Open the index.html file in your browser.

## Usage

- Click on the links in the navigation bar to access Unsplash page.
- Scroll down to view more content on each page.
- Use the contact to send me a message.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
