# QR Code Generator

This Node.js application generates QR codes from a list of URLs and saves them as PNG files.

## Installation

1. Make sure you have Node.js installed on your system. If not, you can download it from [here](https://nodejs.org/).
2. Clone this repository to your local machine or download the source code as a ZIP file.
3. Navigate to the project directory in your terminal.

Certainly! Here's a basic `README.md` file to explain how to install and use the application:


4. Install the dependencies using npm:

```bash
npm install
```

## Usage

1. Create the `urls.js` file in the root directory to include the list of URLs for which you want to generate QR codes. Each URL should be added as a separate item in the array.
2. Run the application using the following command:

```bash
node app.js
```

3. Once the application finishes execution, you will find the generated QR code images in the `output` directory within the project folder.

## Example

Here is an example `urls.js` file:

```javascript
module.exports = [
    'https://example.com',
    'https://google.com',
    'https://github.com'
];
```

After running the application, you will see QR code images for each URL in the `output` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
