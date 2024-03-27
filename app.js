const qr = require('qr-image');
const fs = require('fs');

// Read URLs from file
const urls = require('./urls');


// Function to generate QR code from URL and save it as PNG
function generateQRCode(url, index) {
    const qr_png = qr.imageSync(url, { type: 'png', size: 10 }); // Generate QR code buffer
    fs.writeFileSync(`./output/${index + 1}.png`, qr_png); // Save QR code as PNG
}

// Function to create directory if it doesn't exist
function createOutputDirectory() {
    const outputDir = './output';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
}

// Main function to generate QR codes from URLs
function generateQRCodes(urls) {
    createOutputDirectory(); // Create output directory if it doesn't exist
    urls.forEach((url, index) => {
        generateQRCode(url, index); // Generate QR code for each URL
    });
    console.log('QR codes generated successfully!');
}


generateQRCodes(urls);
