let imgQR = document.getElementById("imgQR");
let imageQR = document.getElementById("imageQR");
let textQR = document.getElementById("textQR");

function generate() {
    imageQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQR.value;
}