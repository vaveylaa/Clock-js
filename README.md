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

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />

  </head>
  <body class="bg-dark">
    <div class="text-center" >
        <img
        src="https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png"
        alt=""
        class="rounded"
        />

        <div class="text1 text-center" id="greeting"></div>
        <div class="clock" id="time"></div>

        <div class="text2 text-center">
            tarihinde
            <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
            Javascript bölümü 1. Ödevindesiniz.
        </div>

    </div>    
    <script src="script.js"></script>
  </body>
</html> 


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
