//  JavaScript for Hamburger Menu Toggle 
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex'); // Add the flex class when visible
});

// Script for QR Code Generation
document.getElementById('generateBtn').addEventListener('click', function () {
    const input = document.getElementById('qrInput').value;
    const qrImage = document.getElementById('qrImage');

    if (input.trim() === "") {
        alert("Please enter a valid URL or text.");
        return;
    }

    QRCode.toDataURL(input, { width: 300, margin: 2 }, function (err, url) {
        if (err) {
            console.error(err);
            return;
        }
        qrImage.src = url;
    });
});